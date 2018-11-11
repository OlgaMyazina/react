import { withBemMod } from '@bem-react/core';

import { ITileProps } from '../index';

import './Tile_type_critical.css';

export interface ITileTypeCriticalProps extends ITileProps {
  type: 'critical';
}
export const TileTypeCritical = withBemMod<ITileTypeCriticalProps>('Tile', { type: 'critical' });
