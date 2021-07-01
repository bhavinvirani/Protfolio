import React, {useContext} from "react";
import "./SoftwareSkill.css";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/styleContext";


const SoftwareSkill = () => {
  const { isDark } = useContext(StyleContext);

  return (
    <>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => {
            return (
              <li
                key={i}
                id={skill.id}
                className="software-skill-inline "
                name={skill.skillName}
              >
                <i className={skill.fontAwesomeClassname}></i>

                <p className={isDark ? "darkp" : "lightp"}>{skill.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default SoftwareSkill;
