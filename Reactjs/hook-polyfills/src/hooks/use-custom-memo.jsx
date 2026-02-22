import { useEffect, useRef } from "react";

const areEqual = (prevDeps, newDeps) => {
  if (prevDeps === null) return false;
  if (prevDeps.length !== newDeps.length) {
    return false;
  }

  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== newDeps[i]) return false;
  }

  return true;
};

// basically we are not creating a global cache. all we are doing is if the deps are changed in next render than update the memo ref with new value.

const useCustomMemo = (cb, deps) => {
  const memoRef = useRef(null);

  if (!memoRef.current || !areEqual(deps, memoRef.current.deps)) {
    memoRef.current = {
      value: cb(),
      deps: deps,
    };
  }

  useEffect(() => {
    return () => {
      memoRef.current = null;
    };
  }, []);

  return memoRef.current.value;
};

export default useCustomMemo;
