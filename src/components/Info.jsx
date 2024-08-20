import PropTypes from "prop-types";
import data from "../assets/data.json";
import { Difficulty } from "./SVG";

export default function Info({ activeChar }) {
  const character = data.find(
    (char) => char.name.toLowerCase() === activeChar.toLowerCase()
  );

  const renderDifficultyIcons = (level) => {
    return Array.from({ length: 5 }).map((_, index) => {
      const fillColor = index < level ? "#FFBA00" : "transparent";
      return (
        <Difficulty
          key={index}
          style={{ fill: fillColor, stroke: "#FFBA00" }}
        />
      );
    });
  };

  return (
    <div className="container">
      {character && (
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
          <img src={character.art} className="info__art" alt="Character Art" />
        </div>
      )}
    </div>
  );
}

Info.propTypes = {
  activeChar: PropTypes.string.isRequired,
};
