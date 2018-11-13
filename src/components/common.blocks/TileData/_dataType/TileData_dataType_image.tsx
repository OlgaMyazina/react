import { withBemMod, ModBody } from '@bem-react/core';

import { ITileDataProps } from '../index';
import TileData from '../TileData';
import Picture from '../../Picture';
import React = require('react');

export interface IPictureProps {
  className: string;
  sourceSrcset: string;
  imgSrc: string;
  imgSrcset: string;
  imgAlt: string;
}
//todo: вынести отдельно
const graphPictureProps = {
  className: this.className,
  sourceSrcset: '',
  imgSrc: './images/Bitmap.png',
  imgSrcset: './images/Bitmap2x.png 2x, ./images/Bitmap3x.png 3x',
  imgAlt: 'Пылесос'
};

const DataImage: ModBody<ITileDataProps> = (TileData, { className }) => (
  <Picture className={className} {...graphPictureProps} />
);

export const TileDataImage = withBemMod<ITileDataProps>('TileData', { dataType: 'image' }, DataImage);
