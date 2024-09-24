import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};
