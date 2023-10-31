import { FC, PropsWithChildren} from 'react';

export const Stack: FC<PropsWithChildren> = ({children}) => (
  <div className="flex flex-col gap-4">
    {children}
  </div>
)