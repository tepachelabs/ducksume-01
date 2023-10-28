import DeveloperInformation from '@/components/DeveloperInformation';

import { DeveloperContext } from '@/context/developer';

import { developer } from '@/developer';

export default function Home() {
  return (
    <main>
      <DeveloperContext.Provider value={developer}>
        <DeveloperInformation />
      </DeveloperContext.Provider>
    </main>
  )
}
