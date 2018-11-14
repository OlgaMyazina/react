import { withBemMod } from '@bem-react/core';

import { IButtonProps } from '../index';
import './Button_color_yellow.css';

export const ButtonPictureBurger = withBemMod<IButtonProps>('Button', { color: 'yellow' });
