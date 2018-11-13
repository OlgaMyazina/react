import { compose, IClassNameProps } from '@bem-react/core';

import './Button.css';

import Base from './Button';
import { ButtonPictureBurger } from './_picture/Button_picture_burger';
import { ButtonPictureNext } from './_picture/Button_picture_next';
import { ButtonPicturePrev } from './_picture/Button_picture_prev';

export interface IButtonProps extends IClassNameProps {
  text: string;
  onClick: () => void;

  picture?: 'burger' | 'next' | 'prev';
}

export const Button = compose(
  ButtonPictureBurger,
  ButtonPictureNext,
  ButtonPicturePrev
)(Base);
