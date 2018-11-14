import { withBemMod, ModBody } from '@bem-react/core';
import React = require('react');

import './TileData_dataType_graph.css';

import { ITileDataProps } from '../index';

import Picture from '../../../Picture';

export interface ITileDataGraph extends ITileDataProps {
  dataType: 'graph';
}

export interface IPictureProps {
  sourceSrcset: string;
  imgSrc: string;
  imgSrcset: string;
  imgAlt: string;
}
const graphPictureProps = {
  sourceSrcset: './images/Richdata.svg',
  imgSrc: './images/Richdata.png',
  imgSrcset: './images/Richdata@2x.png 2x, ./images/Richdata@3x.png 3x',
  imgAlt: 'График потребления энергии'
};

const DataGraph: ModBody<ITileDataGraph> = (TileData, { className }) => (
  <Picture className={className} {...graphPictureProps} />
);

export const TileDataGraph = withBemMod<ITileDataGraph>('TileData', { dataType: 'graph' }, DataGraph);
