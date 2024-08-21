import { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

export default function Abilities({ character }) {
  const [activeSkill, setActiveSkill] = useState({
    title: character.lmbTitle,
    description: character.lmbDescription,
  });

  useEffect(() => {
    // Оновлюємо activeSkill при зміні character
    setActiveSkill({
      title: character.lmbTitle,
      description: character.lmbDescription,
    });
  }, [character]);

  const skills = useMemo(
    () => [
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
    ],
    [character]
  );

  const handleSkillClick = (skill) => setActiveSkill(skill);

  return (
    <>
      <div className="stats__abilities-name">{activeSkill.title}</div>
      <div
        className="stats__abilities-desc"
        dangerouslySetInnerHTML={{ __html: activeSkill.description }}
      />
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
  );
}

Abilities.propTypes = {
  character: PropTypes.shape({
    lmbTitle: PropTypes.string.isRequired,
    lmbDescription: PropTypes.string.isRequired,
    lmbIcon: PropTypes.string.isRequired,
    rmbTitle: PropTypes.string.isRequired,
    rmbDescription: PropTypes.string.isRequired,
    rmbIcon: PropTypes.string.isRequired,
    qTitle: PropTypes.string.isRequired,
    qDescription: PropTypes.string.isRequired,
    qIcon: PropTypes.string.isRequired,
    spcTitle: PropTypes.string.isRequired,
    spcDescription: PropTypes.string.isRequired,
    spcIcon: PropTypes.string.isRequired,
    rTitle: PropTypes.string.isRequired,
    rDescription: PropTypes.string.isRequired,
    rIcon: PropTypes.string.isRequired,
  }).isRequired,
};
