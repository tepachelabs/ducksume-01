import { Technologies }  from '@/components/Technologies';
import { DeveloperInformation }  from '@/components/DeveloperInformation';
import { Education }  from '@/components/Education';

import { DeveloperContext } from '@/context/developer';

import { developer } from '@/developer';

export default function Home() {
  return (
    <main className="
      py-8 px-16 gap-2 bg-amber-50
      flex flex-col content-center items-center
    ">
      <DeveloperContext.Provider value={developer}>
        <DeveloperInformation />
        <Technologies />
        <Education />
      </DeveloperContext.Provider>
    </main>
  )
}
