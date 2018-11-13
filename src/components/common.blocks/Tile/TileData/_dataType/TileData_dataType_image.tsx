import { withBemMod, ModBody } from '@bem-react/core';
import React = require('react');

import './TileData_dataType_image.css';

import { ITileDataProps } from '../index';
import Picture from '../../../Picture';

export interface IPictureProps {
  sourceSrcset: string;
  imgSrc: string;
  imgSrcset: string;
  imgAlt: string;
}
//todo: вынести отдельно
const graphPictureProps = {
  sourceSrcset: '',
  imgSrc: './images/Bitmap.png',
  imgSrcset: './images/Bitmap2x.png 2x, ./images/Bitmap3x.png 3x',
  imgAlt: 'Пылесос'
};

const DataImage: ModBody<ITileDataProps> = (TileData, { className }) => {
  return <Picture className={className} {...graphPictureProps} />;
};

export const TileDataImage = withBemMod<ITileDataProps>('TileData', { dataType: 'image' }, DataImage);
