import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { ITileProps } from '../index';
import Base from '../Tile';
//import Picture from '../../Picture';

const cnIcon = cn('Icon');
//todo: вынести данные для иконки
const iconListProps = {
  className: cnIcon(),
  sourceSrcset: './images/icon_list_m@1x.svg',
  imgSrc: './images/icon_list_m.png',
  imgSrcset: './images/icon_list_m@2x.png 2x',
  imgAlt: 'menu burger'
};

const TileSize: ModBody<ITileProps> = (Base, { text, className }) => <a className={className} />;

export const TileSizeS = withBemMod<ITileProps>('Tile', { size: 's' }, TileSize);
export const TileSizeM = withBemMod<ITileProps>('Tile', { size: 'm' }, TileSize);
export const TileSizeL = withBemMod<ITileProps>('Tile', { size: 'l' }, TileSize);
