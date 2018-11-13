import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { ITileDataProps } from '../index';
import { Button } from '../../Button';
import { EventDataButtons } from '../../EventsPage';
import './TileData_dataType_buttons.css';

const DataButton: ModBody<ITileDataProps> = (TileData, { className, data }) => {
  const cnButtons = cn(className);
  let content = null;
  const arrayButtons: EventDataButtons = data as EventDataButtons;
  content = arrayButtons.buttons.map((button, index) => {
    return <Button className={cnButtons()} text={button} key={index} />;
  });

  return <div className="Buttons">{content}</div>;
};

export const TileDataButton = withBemMod<ITileDataProps>('Button', { dataType: 'buttons' }, DataButton);
