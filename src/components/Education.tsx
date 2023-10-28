import {useContext} from "react";

import { Section } from '@/components/layout/Section';

import {DeveloperContext} from "@/context/developer";

export const Education = () => {
  const { education} = useContext(DeveloperContext);

  if (!education) {
    return null;
  }

  return (
    <Section title="Education">
      <div className="flex justify-between">
        <p className="text-base">{education.title}</p>
        <p className="text-base">{education.year}</p>
      </div>
    </Section>
  )
};
