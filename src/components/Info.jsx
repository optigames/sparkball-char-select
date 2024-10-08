import PropTypes from "prop-types";
import { useEffect, useMemo } from "react";
import data from "../assets/data.json";
import { Difficulty } from "./SVG";
import Stats from "./Stats/Stats";


export default function Info({
  activeChar,
  selectedCategory,
  setSelectedCategory,
  setOpen,
}) {
  const character = useMemo(
    () =>
      data.find((char) => char.name.toLowerCase() === activeChar.toLowerCase()),
    [activeChar]
  );

  useEffect(() => {
    data.forEach((char) => {
      const img = new Image();
      img.src = char.art;
    });
  }, []);

  const renderDifficultyIcons = (level) =>
    Array.from({ length: 5 }).map((_, index) => (
      <Difficulty
        key={index}
        DifficultyStyle={{
          fill: index < level ? "#FFBA00" : "transparent",
          stroke: "#FFBA00",
        }}
      />
    ));

  return (
    <div className="container">
      {character && (
        <>
          <img src={character.art} className="info__art" alt="Character Art" />

          <div className="info">
            <h1 className="info__title">{character.name}</h1>
            <h2 className="info__subtitle">{character.title}</h2>
            <div className="info__desc">{character.description}</div>
            <div className="info__role">
              Role: <span>{character.role}</span>
            </div>
            <div className="info__difficulty">
              Difficulty:{" "}
              <span>{renderDifficultyIcons(character.difficulty)}</span>
            </div>
            <Stats
              character={character}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              setOpen={setOpen}
            />
          </div>
         
        </>
      )}
    </div>
  );
}

Info.propTypes = {
  activeChar: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
};
