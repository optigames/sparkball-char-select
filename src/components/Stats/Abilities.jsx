import { useEffect, useState } from "react";

export default function Abilities({ character }) {
  const [activeSkill, setActiveSkill] = useState({
    title: "",
    description: "",
  });

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
      <div className="stats__abilities-name">{activeSkill.title}</div>
      <div className="stats__abilities-desc">{activeSkill.description}</div>
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
