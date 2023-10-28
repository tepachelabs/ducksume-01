import { FC, PropsWithChildren } from 'react';

export const Title: FC<PropsWithChildren> = ({ children }) => {

  return (
    <h2 className="text-4xl font-bold">{children}</h2>
  )
}