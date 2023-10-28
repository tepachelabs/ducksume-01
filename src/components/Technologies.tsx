import {useContext} from "react";

import { Section } from '@/components/layout/Section';
import { DeveloperContext } from '@/context/developer';

import { repeatCharacter } from '@/utils/general';
import { RATE_EMOJI } from '@/utils/constants';


export const Technologies = () => {
  const { technologies} = useContext(DeveloperContext);

  if (!technologies) {
    return null;
  }

  return (
    <Section title="Technologies">
      <ul className="
        list-disc list-inside
        grid grid-cols-2
       "
      >
        {technologies.map((technology, index) => (
          <li
            key={index}
            className="font-bold"
          >
            {technology.name} {repeatCharacter(RATE_EMOJI, technology.value)}
          </li>
        ))}
      </ul>
    </Section>
  )
}
