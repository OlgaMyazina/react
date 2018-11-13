import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

import { ITileDataProps } from '../index';
import { Button, IButtonProps } from '../../../Button';
import { EventDataButtons } from '../../../EventsPage';
import './TileData_dataType_buttons.css';

const DataButton: ModBody<ITileDataProps> = (TileData, { className, data }) => {
  const cnButtons = cn(className);

  const cnButton = cn('Button');
  const cnApp = cn('App');
  const arrayButtons: EventDataButtons = data as EventDataButtons;
  const content = arrayButtons.buttons.map((button, index) => {
    return <Button className={cnButtons()} text={button} key={index} onClick={() => {}} />;
  });

  return (
    <RegistryConsumer>
      {registries => {
        const registry = registries[cnApp()];
        const Button = registry.get<IButtonProps>(cnButton());
        return <div className="Buttons">{content}</div>;
      }}
    </RegistryConsumer>
  );
};

export const TileDataButton = withBemMod<ITileDataProps>('Button', { dataType: 'buttons' }, DataButton);
