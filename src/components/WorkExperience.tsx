import {useContext} from "react";

import {List} from "@/components/layout/List";
import {Stack} from "@/components/layout/Stack";
import {Section} from "@/components/layout/Section";

import {DeveloperContext} from "@/context/developer";

import {RATE_EMOJI} from "@/utils/constants";
import {repeatCharacter} from "@/utils/general";

export const WorkExperience = () => {
  const { experience} = useContext(DeveloperContext);

  return (
    <Section title="Work Experience">
      {
        experience.map((experience, index) => (
          <Stack key={index}>
            <h2 className="text-2xl font-bold">
              {experience.title}
            </h2>
            <p>{experience.description}</p>
            <List list={experience.achievements} />
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
          </Stack>
        ))
      }
    </Section>
  )
};
