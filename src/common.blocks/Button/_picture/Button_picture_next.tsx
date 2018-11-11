import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { IButtonProps } from '../index';
import Button from '../Button';

export interface IButtonNextProps extends IButtonProps {
  urlImg: string;
}

const ButtonNext: ModBody<IButtonNextProps> = (Base, { urlImg, className }) => {
  const cnButtonNext = cn(className);
  return (
    <a className={className}>
      <div className={cnButtonNext('IconNext')} style={{ backgroundImage: `url(images/${this.urlImg}.svg)` }} />
    </a>
  );
};

export const ButtonPictureNext = withBemMod<IButtonNextProps>('Button', { picture: 'next' }, ButtonNext);
