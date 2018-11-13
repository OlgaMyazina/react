import { withBemMod, ModBody } from '@bem-react/core';
import * as React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

import { ITileDataProps } from '../index';
import { Audio } from '../../../Audio';

import { IAudioProps } from '../../../../common.blocks/Audio/Audio';

const DataAudio: ModBody<ITileDataProps> = (TileData, { className, data }) => {
  const cnAudio = cn('Audio');
  const cnApp = cn('App');

  return (
    <RegistryConsumer>
      {registries => {
        const registry = registries[cnApp()];
        const Audio = registry.get<IAudioProps>(cnAudio());
        return (
          <section className="AudioBlock">
            <Audio className={cnAudio()} audioData={data as any} />
          </section>
        );
      }}
    </RegistryConsumer>
  );
};

export const TileDataAudio = withBemMod<ITileDataProps>('Audio', { dataType: 'audio' }, DataAudio);
