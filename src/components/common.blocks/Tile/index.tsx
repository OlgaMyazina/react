import { IClassNameProps } from '@bem-react/core';

import { DeviceEvent } from '../EventsPage';
import { DataType } from './TileData';
import Base from './Tile';

export interface ITileProps extends IClassNameProps {
  event: DeviceEvent;

  //mod
  type: string;
  dataType?: DataType;
  text?: string;
  size?: 's' | 'm' | 'l';
}
export const Tile = Base;
