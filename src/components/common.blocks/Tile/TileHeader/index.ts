import { compose, IClassNameProps } from '@bem-react/core';

import Base from './TileHeader';

import { DeviceEvent } from '../../EventsPage';

import { TileTypeInfo } from './_type/Tile_type_info';
import { TileTypeCritical } from './_type/Tile_type_critical';

export const TileHeader = compose(
  TileTypeCritical,
  TileTypeInfo
)(Base);
