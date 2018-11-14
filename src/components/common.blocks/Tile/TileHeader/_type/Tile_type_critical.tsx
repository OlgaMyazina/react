import { withBemMod } from '@bem-react/core';

import './Tile_type_critical.css';
import { ITileHeaderProps } from '../TileHeader';

export interface ITileTypeCriticalProps extends ITileHeaderProps {
  type: string;
}
export const TileTypeCritical = withBemMod<ITileTypeCriticalProps>('Tile', { type: 'critical' });
