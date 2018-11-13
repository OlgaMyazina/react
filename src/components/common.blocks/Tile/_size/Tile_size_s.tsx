import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';

//import { cn } from '@bem-react/classname';
import { ITileProps } from '../index';
import Base from '../Tile';

export interface ITileSIzeSProps extends ITileProps {
  size: 's';
}
export interface ITileSIzeMProps extends ITileProps {
  size: 'm';
}
export interface ITileSIzeLProps extends ITileProps {
  size: 'l';
}
//const TileSize: ModBody<ITileProps> = (Base, { text, className }) => <a className={className} />;
//export const TileSizes = withBemMod<ITileSIzeSProps>('Tile', { size: 's' }, TileSize);
//export const TileSizem = withBemMod<ITileSIzeMProps>('Tile', { size: 'm' }, TileSize);

export const TileSizeS = withBemMod<ITileSIzeSProps>('Tile', { size: 's' });
export const TileSizeM = withBemMod<ITileSIzeMProps>('Tile', { size: 'm' });
export const TileSizeL = withBemMod<ITileSIzeLProps>('Tile', { size: 'l' });
