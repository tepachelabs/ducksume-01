import { FC } from 'react';

import {BoldString} from "@/components/layout/BoldText";

interface Props {
  list: string[];
}

export const List: FC<Props> = ({ list }) => {
  return (
    <ul className="list-disc list-inside flex flex-col gap-2">
      {list.map((content) => (
        <div key={content}>
          <li>
            <BoldString text={content} />
          </li>
        </div>
      ))}
    </ul>
  )
}