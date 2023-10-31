import { Technologies }  from '@/components/Technologies';
import { DeveloperInformation }  from '@/components/DeveloperInformation';
import { Education }  from '@/components/Education';
import { WorkExperience }  from '@/components/WorkExperience';
import { Projects }  from '@/components/Projects';

import { DeveloperContext } from '@/context/developer';

import { developer } from '@/developer';

export default function Home() {
  return (
    <main className="flex justify-center py-8 px-16 bg-amber-50">
      <div className="flex flex-col content-center items-center gap-2 max-w-6xl">
        <DeveloperContext.Provider value={developer}>
          <DeveloperInformation />
          <Technologies />
          <Education />
          <WorkExperience />
          <Projects />
        </DeveloperContext.Provider>
      </div>
    </main>
  )
}
