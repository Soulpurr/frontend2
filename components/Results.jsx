import React from "react";
import Card from "./Card";

function Results({results}) {
  return (
    <div className="p-3 my-2 sm:grid md:grid-cols-2 xl:grid-cols-4">
      {results.map((result) => (
        <Card key={result.objectId} result={result} />
      ))}
    </div>
  );
}

export default Results;
