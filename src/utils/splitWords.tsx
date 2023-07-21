import React from "react";

export function splitWordsToCharacters(
  text: string,
  id = "title-split" as string
) {
  return text.split(" ").map((word, wordIndex) => (
    <React.Fragment key={wordIndex}>
      {word.split("").map((char, charIndex) => (
        <span key={`${wordIndex}-${charIndex}`} id={id}>
          {char}
        </span>
      ))}
      {wordIndex < text.split(" ").length - 1 && (
        <span className="text-transparent">{"."}</span>
      )}
    </React.Fragment>
  ));
}
