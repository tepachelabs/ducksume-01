import { useContext } from 'react';
import Image from 'next/image'

import { DeveloperContext }  from '@/context/developer';

const DeveloperInformation = () => {
  const {
    name,
    title,
    phone,
    email,
  } = useContext(DeveloperContext);

  return (
    <div className="flex">
      <Image
        src="/duckveloper-image.jpeg"
        priority
        alt="Developer Profile Picture"
        width="0"
        height="0"
        sizes="100vw"
        className="w-60 h-auto"
      />
      <div>
        <h1>{title}</h1>
        <h2>{name}</h2>
        <p>📱 {phone}</p>
        <p>📧 {email}</p>
      </div>
    </div>
  )
};

export default DeveloperInformation;
