import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { IButtonProps } from '../index';
import './Button_picture_prev.css';

const ButtonPrev: ModBody<IButtonProps> = (Base, { className }) => {
  const cnButtonPrev = cn(className);
  return (
    <a className={className}>
      <div className={cnButtonPrev('IconPrev')} />
    </a>
  );
};

export const ButtonPicturePrev = withBemMod<IButtonProps>('Button', { picture: 'prev' }, ButtonPrev);
