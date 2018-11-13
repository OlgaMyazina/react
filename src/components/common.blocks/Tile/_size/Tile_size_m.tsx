import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';

import './Tile_size_m.css';
//import { cn } from '@bem-react/classname';
import { ITileProps } from '../index';
import Base from '../Tile';
import './Tile_size_m.css';

export interface ITileSIzeMProps extends ITileProps {
  size: 'm';
}

//const TileSize: ModBody<ITileProps> = (Base, { text, className }) => <a className={className} />;

export const TileSizeM = withBemMod<ITileSIzeMProps>('Tile', { size: 'm' });
