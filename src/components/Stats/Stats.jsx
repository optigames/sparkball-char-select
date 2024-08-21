import PropTypes from "prop-types";
import { useState } from "react";
import Abilities from "./Abilities";
import Lore from "./Lore";

export default function Stats({ character }) {
  const [selectedCategory, setSelectedCategory] = useState("ABILITIES"); // State for selected category

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="stats__buttons">
        <button
          className={`stats__button ${
            selectedCategory === "ABILITIES" ? "stats__button-active" : ""
          }`}
          onClick={() => handleCategoryClick("ABILITIES")}
        >
          ABILITIES
        </button>
        <button
          className={`stats__button ${
            selectedCategory === "TIPS" ? "stats__button-active" : ""
          }`}
          onClick={() => handleCategoryClick("TIPS")}
        >
          TIPS
        </button>
        <button
          className={`stats__button ${
            selectedCategory === "LORE" ? "stats__button-active" : ""
          }`}
          onClick={() => handleCategoryClick("LORE")}
        >
          LORE
        </button>
        <button
          className={`stats__button ${
            selectedCategory === "HERO SPOTLIGHT" ? "stats__button-active" : ""
          }`}
          onClick={() => handleCategoryClick("HERO SPOTLIGHT")}
        >
          HERO SPOTLIGHT
        </button>
      </div>

      <div className="stats__info">
        {selectedCategory === "ABILITIES" && (
          <Abilities character={character} />
        )}
        {selectedCategory === "LORE" && <Lore character={character} />}
      </div>
    </>
  );
}

Stats.propTypes = {
  character: PropTypes.object.isRequired, // Update prop type to match the actual type of `character`
};
