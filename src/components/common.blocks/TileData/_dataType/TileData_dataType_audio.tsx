import { withBemMod, ModBody } from '@bem-react/core';

import { ITileDataProps } from '../index';
import TileData from '../TileData';
import Picture from '../../Picture';
import * as React from 'react';
import Audio from '../../Audio';

import { IAudioData } from '../../Audio/Audio';
import { cn } from '@bem-react/classname';

const DataAudio: ModBody<ITileDataProps> = (TileData, { className, data }) => {
  const cnAudio = cn(className);
  console.log(cnAudio());
  return (
    <section className="AudioBlock">
      <Audio className={cnAudio()} audioData={data as any} />
    </section>
  );
};

export const TileDataAudio = withBemMod<ITileDataProps>('Audio', { dataType: 'audio' }, DataAudio);
