import { compose, IClassNameProps } from '@bem-react/core';

import Base from './Tile';
import { TileSizeS, TileSizeM, TileSizeL } from './_size/Tile_size_s';
import { DeviceEvent } from '../EventsPage';
import './Tile.css';
import { TileTypeInfo } from './_type/Tile_type_info';
import { TileTypeCritical } from './_type/Tile_type_critical';

export interface ITileProps extends IClassNameProps {
  event: DeviceEvent;

  //mod
  type: 'critical' | 'info';
  text?: string;
  size?: 's' | 'm' | 'l';
}

export const Tile = compose(
  TileSizeS,
  TileSizeM,
  TileSizeL,
  TileTypeCritical,
  TileTypeInfo
)(Base);
