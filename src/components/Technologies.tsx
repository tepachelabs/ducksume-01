import {useContext} from "react";

import { Section } from '@/components/layout/Section';
import { DeveloperContext } from '@/context/developer';

function repeatCharacter(char: string, n: number): string {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += char;
  }
  return result;
}

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
        {technologies.map((technology) => (
          <li
            key={technology.name}
            className="font-bold"
          >
            {technology.name} {repeatCharacter('⭐', technology.value)}
          </li>
        ))}
      </ul>
    </Section>
  )
}
