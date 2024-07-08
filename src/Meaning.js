import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (!props.meaning || !props.meaning.definitions || props.meaning.definitions.length === 0) {
    return (
      <div className="Meaning">
        <p>No definitions found.</p>
      </div>
    );
  }

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => (
        <div key={index}>
          <p>
            <strong>Definition:</strong> {definition.definition}
            <br />
            <strong>Example:</strong> <em>{definition.example}</em>
            <br />
            {definition.synonyms && definition.synonyms.length > 0 && (
              <React.Fragment>
                <strong>Synonyms:</strong>{" "}
                <Synonyms synonyms={definition.synonyms} />
              </React.Fragment>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
