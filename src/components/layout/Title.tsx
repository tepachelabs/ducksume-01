import { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  href?: string;
  isLink?: boolean;
}

export const Title: FC<Props> = ({ children, isLink, href }) => {
  if (isLink && href) {
    console.log('??')
    return <a className="text-3xl font-bold" href={href} target="_blank">{children}</a>
  }

  return (
    <h2 className="text-3xl font-bold">{children}</h2>
  )
}