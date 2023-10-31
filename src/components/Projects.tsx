import {useContext} from "react";

import {List} from "@/components/layout/List";
import {Stack} from "@/components/layout/Stack";
import {Section} from "@/components/layout/Section";

import {DeveloperContext} from "@/context/developer";

export const Projects = () => {
  const { projects} = useContext(DeveloperContext);

  return (
    <Section title="Projects">
      {
        projects.map((project, index) => (
          <Stack key={index}>
            <a
              className="text-2xl font-bold underline underline-offset-1"
              href="https://www.google.com/"
              target="_blank"
            >
              🔗 Duck Cafe
            </a>
            {project.achievements && <List list={project.achievements} />}
          </Stack>
        ))
      }
    </Section>
  )
};