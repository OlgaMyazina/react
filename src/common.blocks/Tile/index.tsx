import { compose, IClassNameProps } from '@bem-react/core';

import Base from './Tile';
import { TileSizeS, TileSizeM, TileSizeL } from './_size/Tile_size';
import { DeviceEvent } from '../EventsPage';
import './Tile.css';

export interface ITileProps extends IClassNameProps {
  event: DeviceEvent;

  //mod
  text?: string;
  size?: 's' | 'm' | 'l';
}

export const Tile = compose(
  TileSizeS,
  TileSizeM,
  TileSizeL
)(Base);
