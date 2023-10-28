import {useContext} from "react";

import {Section} from "@/components/layout/Section";
import {BoldString} from "@/components/layout/BoldText";

import {DeveloperContext} from "@/context/developer";
import {repeatCharacter} from "@/utils/general";
import {RATE_EMOJI} from "@/utils/constants";

export const WorkExperience = () => {
  const { experience} = useContext(DeveloperContext);

  return (
    <Section title="Work Experience">
      {
        experience.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold">
              {experience.title}
            </h2>
            <p>{experience.description}</p>
            <ul className="list-disc list-inside">
              {experience.achievements.map((achievement) => (
                <div key={achievement}>
                  <li>
                    <BoldString text={achievement} />
                  </li>
                </div>
              ))}
            </ul>
            {
              experience.technologies ? (
                <div>
                  <h3 className="text-lg font-bold">
                    Technologies
                  </h3>
                  {experience.technologies.map((technology, index) => (
                    <li
                      key={index}
                      className="font-bold"
                    >
                      {technology.name} {repeatCharacter(RATE_EMOJI, technology.value)}
                    </li>
                  ))}
                </div>
              ) : null
            }
          </div>
        ))
      }
    </Section>
  )
};
