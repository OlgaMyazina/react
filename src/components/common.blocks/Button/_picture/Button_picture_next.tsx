import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import './Button_picture_next.css';

import { IButtonProps } from '../index';

export interface IButtonNextProps extends IButtonProps {
  urlImg: string;
}

const ButtonNext: ModBody<IButtonProps> = (Base, { className }) => {
  const cnButtonNext = cn(className);
  return (
    <a className={className}>
      <div className={cnButtonNext('IconNext')} />
    </a>
  );
};

export const ButtonPictureNext = withBemMod<IButtonProps>('ButtonNext', { picture: 'next' }, ButtonNext);
