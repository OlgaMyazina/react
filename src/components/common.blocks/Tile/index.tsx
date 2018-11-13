import { compose, IClassNameProps } from '@bem-react/core';

import Base from './Tile';
import { TileSizeS } from './_size/Tile_size_s';
import { TileSizeM } from './_size/Tile_size_m';
import { TileSizeL } from './_size/Tile_size_l';
import { DeviceEvent } from '../EventsPage';

import { DataType } from '../TileData';

export interface ITileProps extends IClassNameProps {
  event: DeviceEvent;

  //mod
  type: string;
  dataType: DataType;
  text?: string;
  size?: 's' | 'm' | 'l';
}

export const Tile = compose(
  TileSizeS,
  TileSizeM,
  TileSizeL
)(Base);
