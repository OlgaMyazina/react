import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
//import { cn } from '@bem-react/classname';
import { ITileProps } from '../index';
//import Base from '../Tile';

//const TileSize: ModBody<ITileProps> = (Base, { text, className }) => <a className={className} />;

export const TileSizeS = withBemMod<ITileProps>('Tile', { size: 's' });
export const TileSizeM = withBemMod<ITileProps>('Tile', { size: 'm' });
export const TileSizeL = withBemMod<ITileProps>('Tile', { size: 'l' });
