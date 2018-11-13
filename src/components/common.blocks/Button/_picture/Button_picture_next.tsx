import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { IButtonProps } from '../index';

export interface IButtonNextProps extends IButtonProps {
  urlImg: string;
}

const ButtonNext: ModBody<IButtonProps> = (Base, { className }) => {
  const cnButtonNext = cn(className);
  return (
    <a className={className}>
      <div className={cnButtonNext('IconNext')} style={{ backgroundImage: `url(../../images/Next.svg)` }} />
    </a>
  );
};

export const ButtonPictureNext = withBemMod<IButtonProps>('Button', { picture: 'next' }, ButtonNext);
