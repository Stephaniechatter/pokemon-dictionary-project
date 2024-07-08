import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (!props.results || !props.results.meanings || props.results.meanings.length === 0) {
    return <div className="Results">No results found.</div>;
  }

  return (
    <div className="Results">
      <h2>{props.results.word}</h2>
      {props.results.meanings.map((meaning, index) => (
        <Meaning key={index} meaning={meaning} />
      ))}
    </div>
  );
}
