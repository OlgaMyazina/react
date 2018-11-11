import { withBemMod, ModBody } from '@bem-react/core';

import { ITileDataProps } from '../index';
import TileData from '../TileData';
import Picture from '../../Picture';
import * as React from 'react';
import Audio from '../../Audio';

import { IAudioData } from '../../Audio/Audio';

export interface ITileDataAudio extends ITileDataProps {
  /*dataType: 'audio';*/
  /*data?: IAudioData;*/
}

const DataAudio: ModBody<ITileDataAudio> = (TileData, { className, data }) => {
  return <Audio className={className} audioData={data as any} />;
};

export const TileDataAudio = withBemMod<ITileDataAudio>('Data', { dataType: 'audio' }, DataAudio);
