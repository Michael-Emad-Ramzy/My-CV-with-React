import AOS from "aos";
import "aos/dist/aos.css";
import Sections from "./Sections";
import { useState } from "react";
import TopicButtons from "./TopicButtons";
import { CV_SECTIONS } from "../../data";

export default function SeactionSelector() {
  const [selectedTopic, setSelectedTopic] = useState("EDUCATION");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  // let content = <p className="text" data-aos="fade-up">Please Select A Topic</p>;
  let content ; 

  
    content = (
      <div id="tab-content" data-aos="fade-up">
        <h3>{CV_SECTIONS[selectedTopic].title}</h3>
        <pre>
          <code>{CV_SECTIONS[selectedTopic].description}</code>
        </pre>
        <pre>
          <code>{CV_SECTIONS[selectedTopic].code}</code>
        </pre>
      </div>
    );
  
  return (
    <>
      <h2 data-aos="fade-up">About ME</h2>
      <div id="examples" data-aos="fade-down">
        <Sections
          buttons={
            <>
              <TopicButtons
                isSelected={selectedTopic === "EDUCATION"}
                onClick={() => handleSelect("EDUCATION")}
              >
                EDUCATION
              </TopicButtons>
              <TopicButtons 
                isSelected={selectedTopic === "QUALIFICATIONS"}
                onClick={() => handleSelect("QUALIFICATIONS")}
              >
                QUALIFICATIONS
              </TopicButtons>
              <TopicButtons
                isSelected={selectedTopic === "WORK_EXPERIENCE"}
                onClick={() => handleSelect("WORK_EXPERIENCE")}
              >
                WORK EXPERIENCE
              </TopicButtons>
              <TopicButtons
                isSelected={selectedTopic === "GRADUATION_PROJECT"}
                onClick={() => handleSelect("GRADUATION_PROJECT")}
              >
                GRADUATION PROJECT
              </TopicButtons>
              <TopicButtons
                isSelected={selectedTopic === "HOPPIES"}
                onClick={() => handleSelect("HOPPIES")}
              >
                HOPPIES
              </TopicButtons>
              <TopicButtons
                isSelected={selectedTopic === "VOLUNTEER_EXPERIENCE"}
                onClick={() => handleSelect("VOLUNTEER_EXPERIENCE")}
              >
                VOLUNTEER EXPERIENCE
              </TopicButtons>
              <TopicButtons
                isSelected={selectedTopic === "SOFT_SKILLS"}
                onClick={() => handleSelect("SOFT_SKILLS")}
              >
                SOFT SKILLS
              </TopicButtons>
              <TopicButtons
                isSelected={selectedTopic === "PROFESSIONAL_DEVELOPMENT"}
                onClick={() => handleSelect("PROFESSIONAL_DEVELOPMENT")}
              >
                PROFESSIONAL DEVELOPMENT
              </TopicButtons>
              <TopicButtons
                isSelected={selectedTopic === "LANGUAGE"}
                onClick={() => handleSelect("LANGUAGE")}
              >
                LANGUAGE
              </TopicButtons>
            </>
          }
        />
        {content}
      </div>
    </>
  );
}
