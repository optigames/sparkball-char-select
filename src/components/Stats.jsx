import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Stats({ character }) {
  const [activeSkill, setActiveSkill] = useState({
    title: "",
    description: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("ABILITIES"); // State for selected category

  useEffect(() => {
    if (character) {
      const firstSkill = {
        title: character.lmbTitle,
        description: character.lmbDescription,
      };
      setActiveSkill(firstSkill);
    }
  }, [character]);

  const handleSkillClick = (skill) => {
    setActiveSkill({
      title: skill.title,
      description: skill.description,
    });
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const skills = [
    {
      title: character.lmbTitle,
      description: character.lmbDescription,
      icon: character.lmbIcon,
    },
    {
      title: character.rmbTitle,
      description: character.rmbDescription,
      icon: character.rmbIcon,
    },
    {
      title: character.qTitle,
      description: character.qDescription,
      icon: character.qIcon,
    },
    {
      title: character.spcTitle,
      description: character.spcDescription,
      icon: character.spcIcon,
    },
    {
      title: character.rTitle,
      description: character.rDescription,
      icon: character.rIcon,
    },
  ];

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
          <>
            <div className="stats__abilities-name">{activeSkill.title}</div>
            <div className="stats__abilities-desc">
              {activeSkill.description}
            </div>
            <div className="stats__abilities-icons">
              {skills.map((skill, index) => (
                <button
                  key={index}
                  className={`stats__abilities-icon ${
                    activeSkill.title === skill.title
                      ? "stats__abilities-icon-active"
                      : ""
                  }`}
                  onClick={() => handleSkillClick(skill)}
                >
                  <img src={skill.icon} alt={skill.title} />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

Stats.propTypes = {
  character: PropTypes.object.isRequired, // Update prop type to match the actual type of `character`
};
