import { useContext } from 'react';

import Image from 'next/image'

import { Title } from '@/components/layout/Title';
import { BaseWrapper } from '@/components/layout/BaseWrapper';
import { DeveloperContext } from '@/context/developer';


export const DeveloperInformation = () => {
  const {
    name,
    title,
    phone,
    email,
  } = useContext(DeveloperContext);

  return (
    <div className="w-full flex gap-2 flex-col md:flex-row">
      <Image
        src="/duckveloper-image.jpeg"
        priority
        alt="Developer Profile Picture"
        width="0"
        height="0"
        sizes="100vw"
        className="w-60 h-60 border-black border-2 self-center rounded-full md:rounded-xl"
      />
      <BaseWrapper>
        <div className="flex flex-col gap-1">
          <Title>{title}</Title>
          <h2 className="text-2xl">{name}</h2>
          <p className="text-2xl">📱 {phone}</p>
          <p className="text-2xl">📧 {email}</p>
        </div>
      </BaseWrapper>
    </div>
  )
};
