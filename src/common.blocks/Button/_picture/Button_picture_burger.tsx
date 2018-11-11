import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { IButtonProps } from '../index';
import Button from '../Button';
import Picture from '../../Picture';

const cnIcon = cn('Icon');
//todo: вынести данные для иконки
const iconListProps = {
  className: cnIcon(),
  sourceSrcset: './images/icon_list_m@1x.svg',
  imgSrc: './images/icon_list_m.png',
  imgSrcset: './images/icon_list_m@2x.png 2x',
  imgAlt: 'menu burger'
};

const ButtonPicture: ModBody<IButtonProps> = (Base, { text, className }) => (
  <a className={className}>
    <Picture {...iconListProps}>{text}</Picture>
  </a>
);

export const ButtonPictureBurger = withBemMod<IButtonProps>('Button', { picture: 'burger' }, ButtonPicture);
