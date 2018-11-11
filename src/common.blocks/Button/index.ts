import { compose, IClassNameProps } from '@bem-react/core';

import Base from './Button';
import { ButtonPictureBurger } from './_picture/Button_picture_burger';
//import { ButtonThemeAction } from './_theme/Button_theme_action';

export interface IButtonProps extends IClassNameProps {
  text: string;
  onClick: () => void;

  // list of all modifiers
  picture?: 'burger';
  //  theme?: 'action';
}

// composition of all variations
// JSX → <Button text="Hello" type="link" theme="action" /> gives
// HTML → <a class="Button Button_type_link Button_theme_action">Hello</a>
export const Button = compose(
  ButtonPictureBurger
  //  ButtonThemeAction,
  //  ButtonTypeLink
)(Base);
