import { useCallback, useEffect, useState } from "react";

const SUGGESTIONS_LIMIT = 20;

const AutoCompleteSearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(async () => {
    try {
      setIsFetching(true);
      const searchParams = new URLSearchParams({
        q: searchInput,
        limit: SUGGESTIONS_LIMIT.toString(),
      });
      const response = await fetch(
        "https://dummyjson.com/recipes/search?" + searchParams.toString()
      );
      const data = await response.json();

      setSuggestions(data.recipes.map((recipe: any) => recipe.name));
      setIsFetching(false);
    } catch (error) {
      console.log("error", error);
    }
  }, [searchInput]);

  useEffect(() => {
    if (!searchInput) return;

    const timer = setTimeout(() => {
      fetchSuggestions();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  return (
    <div className="search-bar-container">
      <div>
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <div className="suggestions-list">
          {suggestions?.map((suggestion) => (
            <div className="suggestion-item">{suggestion}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteSearchBar;
