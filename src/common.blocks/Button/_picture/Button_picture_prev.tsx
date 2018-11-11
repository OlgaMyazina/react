import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { IButtonProps } from '../index';
import Button from '../Button';

export interface IButtonPrevProps extends IButtonProps {
  urlImg: string;
}

const ButtonPrev: ModBody<IButtonPrevProps> = (Base, { urlImg, className }) => {
  const cnButtonPrev = cn(className);
  return (
    <a className={className}>
      <div className={cnButtonPrev('IconPrev')} style={{ backgroundImage: `url(images/${this.urlImg}.svg)` }} />
    </a>
  );
};

export const ButtonPicturePrev = withBemMod<IButtonPrevProps>('Button', { picture: 'prev' }, ButtonPrev);
