import { compose, IClassNameProps } from '@bem-react/core';

import Base from './Tile';
import { TileSizeS, TileSizeM, TileSizeL } from './_size/Tile_size';

export interface ITileProps extends IClassNameProps {
  text: string;
  size?: 's' | 'm' | 'l';
}

export const Tile = compose(
  TileSizeS,
  TileSizeM,
  TileSizeL
)(Base);
