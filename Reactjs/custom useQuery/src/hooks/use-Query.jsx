import { useState, useEffect, useCallback } from "react";

const cache = new Map(); // key -> data
const errorCache = new Map(); // key -> error
const promiseMap = new Map(); // key -> in-flight promise
const subscribers = new Map(); // key -> Set(subscribers)

const useQuery = (key, fetchFunction) => {
  const [data, setData] = useState(() => cache.get(key) ?? null);
  const [error, setError] = useState(() => errorCache.get(key) ?? null);
  const [isLoading, setIsLoading] = useState(() => {
    return !cache.has(key) && !errorCache.has(key);
  });

  const fetchData = useCallback(() => {
    if (!key) return;

    if (promiseMap.has(key)) return promiseMap.get(key);

    setIsLoading(true);
    const promise = fetchFunction(key)
      .then((d) => {
        cache.set(key, d);
        promiseMap.delete(key);

        subscribers.get(key).forEach((sub) => {
          sub.notifySuccess(d);
        });
      })
      .catch((err) => {
        cache.set(key, err);
        promiseMap.delete(key);

        subscribers.get(key).forEach((sub) => {
          sub.notifyError(d);
        });
      });

    promiseMap.set(key, promise);

    return promise;
  }, [key, fetchFunction]);

  useEffect(() => {
    if (!key) return;

    const notifySuccess = (d) => {
      setData(d);
      setError(null);
      setIsLoading(false);
    };

    const notifyError = (err) => {
      setError(err);
      setIsLoading(false);
    };

    if (!subscribers.get(key)) {
      subscribers.set(key, new Set());
    }

    subscribers.get(key).add({ notifySuccess, notifyError });

    if (cache.has(key)) {
      setData(cache.get(key));
      setIsLoading(false);
    } else if (promiseMap.has(key)) {
      setIsLoading(true);
    } else {
      fetchData();
    }

    return () => {
      const subs = subscribers.get(key);
      if (!subs) return;

      subs.forEach((sub) => {
        if (sub.notifySuccess === notifySuccess) {
          subs.delete(sub);
        }
      });

      if (subs.size === 0) {
        subscribers.delete(key);
      }
    };
  }, [key]);

  const refetch = useCallback(() => {
    if (!key) return;
    cache.delete(key);
    errorCache.delete(key);
    fetchData();
  }, [key, fetchData]);

  return {
    data,
    error,
    isLoading,
    refetch,
  };
};

export default useQuery;
