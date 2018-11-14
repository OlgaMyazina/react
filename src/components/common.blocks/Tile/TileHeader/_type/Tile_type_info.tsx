import { withBemMod } from '@bem-react/core';

import './Tile_type_info.css';
import { ITileHeaderProps } from '../TileHeader';

export interface ITileTypeInfoProps extends ITileHeaderProps {
  type: 'info';
}
export const TileTypeInfo = withBemMod<ITileTypeInfoProps>('Tile', { type: 'info' });
