import PropTypes from "prop-types";
import Abilities from "./Abilities";
import Lore from "./Lore";
import Tips from "./Tips";

export default function Stats({
  character,
  selectedCategory,
  setSelectedCategory,
  setOpen,
}) {
  const handleCategoryClick = (category) => setSelectedCategory(category);
  const handleCategorySpotlight = () => {
    setSelectedCategory("HERO SPOTLIGHT");
    setOpen(true);
  };

  return (
    <>
      <div className="stats__buttons">
        {["ABILITIES", "TIPS", "LORE", "HERO SPOTLIGHT"].map((category) => (
          <button
            key={category}
            className={`stats__button ${
              selectedCategory === category ? "stats__button-active" : ""
            }`}
            onClick={
              category === "HERO SPOTLIGHT"
                ? handleCategorySpotlight
                : () => handleCategoryClick(category)
            }
          >
            {category}
          </button>
        ))}
      </div>
      {selectedCategory !== "HERO SPOTLIGHT" && (
        <div className="stats__info">
          <div className="stats__wrap">
            {selectedCategory === "ABILITIES" && (
              <Abilities character={character} />
            )}
            {selectedCategory === "LORE" && <Lore character={character} />}
            {selectedCategory === "TIPS" && <Tips character={character} />}
          </div>
        </div>
      )}
    </>
  );
}

Stats.propTypes = {
  character: PropTypes.object.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
};
