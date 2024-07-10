import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (!props.results) {
    return null; // Return early if results are not available
  }

  return (
    <div className="Results">
      <h2>{props.results.word}</h2>
      {props.results.phonetics.map((phonetic, index) => (
        <div key={index}>
          <Phonetic phonetic={phonetic} />
        </div>
      ))}
      {props.results.meanings.map((meaning, index) => (
        <div key={index}>
          <Meaning meaning={meaning} />
        </div>
      ))}
      <div className="image-container">
        {props.results.images && props.results.images.slice(0, 6).map((image, index) => (
          <img key={index} src={image.url} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}
