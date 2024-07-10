import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  const handleResponse = (response) => {
    setResults(response.data[0]);
  };

  const search = (event) => {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Enter a word..."
          value={keyword}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
