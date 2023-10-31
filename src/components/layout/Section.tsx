import { FC, PropsWithChildren } from 'react';

import { Title } from "@/components/layout/Title";
import { BaseWrapper } from '@/components/layout/BaseWrapper';

interface Props extends PropsWithChildren {
  title: string;
}
export const Section: FC<Props> = ({ children, title }) => {

  return (
    <BaseWrapper>
      <div className="flex flex-col gap-4">
        <Title>{title}</Title>
        <hr className="border-1 border-black"/>
        {children}
      </div>
    </BaseWrapper>
  )
};

