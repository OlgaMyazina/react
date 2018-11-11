import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';

//import { cn } from '@bem-react/classname';
import { ITileProps } from '../index';
import Base from '../Tile';
import './Tile_size_l.css';

export interface ITileSIzeMProps extends ITileProps {
  size: 'l';
}

//const TileSize: ModBody<ITileProps> = (Base, { text, className }) => <a className={className} />;

export const TileSizeL = withBemMod<ITileSIzeMProps>('Tile', { size: 'l' });
