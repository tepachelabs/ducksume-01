import { PropsWithChildren, FC  } from 'react';

export const BaseWrapper: FC<PropsWithChildren> = ({ children }) => {

  return (
    <div className="w-full p-4 border-black border-2 rounded-xl">
      {children}
    </div>
  )
};