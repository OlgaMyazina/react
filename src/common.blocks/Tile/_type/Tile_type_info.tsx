import { withBemMod } from '@bem-react/core';

import { ITileProps } from '../index';

import './Tile_type_info.css';

export interface ITileTypeInfoProps extends ITileProps {
  type: 'info';
}
export const TileTypeInfo = withBemMod<ITileTypeInfoProps>('Tile', { type: 'info' });
