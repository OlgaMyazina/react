import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { ITileDataProps } from '../index';
import { EventDataClimat } from '../../../EventsPage';
import './TileData_dataType_climate.css';

const DataClimate: ModBody<ITileDataProps> = (TileData, { className, data }) => {
  const cnClimate = cn(className);
  const dataClimate: EventDataClimat = data as EventDataClimat;
  const content = (
    <div className={cnClimate()}>
      <p className={cnClimate('Temperature')}>
        Температура: <span className={cnClimate('TemperatureValue')}> {dataClimate.temperature} C</span>
      </p>
      <p className={cnClimate('Humidity')}>
        Влажность: <span className={cnClimate('HumidityValue')}> {dataClimate.humidity} %</span>
      </p>
    </div>
  );
  return <React.Fragment>{content}</React.Fragment>;
};

export const TileDataClimate = withBemMod<ITileDataProps>('Data', { dataType: 'climate' }, DataClimate);
