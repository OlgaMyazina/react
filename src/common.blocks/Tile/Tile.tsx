import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { cn, ClassNameFormatter } from '@bem-react/classname';

import { ITileProps } from './index';

export interface DeviceEvent {
  type: string;
  title: string;
  source: string;
  time: string;
  description: null | string;
  icon: string;
  data: EventData | undefined;
  size: EventSize;
}

export type EventData = EventDataAudio | EventDataGraph | EventDataImage | EventDataButtons;

export type EventSize = 's' | 'm' | 'l';

export interface EventDataAudio {
  albumcover: string;
  artist: string;
  track: {
    name: string;
    length: string;
  };
  volume: number;
}
export interface EventDataGraph {
  type: 'graph';
  values: object[];
}
export interface EventDataImage {
  image: string;
}
export interface EventDataButtons {
  buttons: string[];
}

export default class Tile extends Component {
  event: DeviceEvent;
  className: string;
  cnTile: ClassNameFormatter;
  cnHeader: ClassNameFormatter;
  cnInfo: ClassNameFormatter;
  constructor(props: any) {
    super(props);
    this.event = props.event;
    this.cnTile = cn('Tile');
    this.className = props.className;
    this.cnHeader = cn('Header');
    this.cnInfo = cn('Info');
  }

  render() {
    return (
      <article className={this.cnTile()}>
        <header className={this.cnTile('Header', ['Header'])}>
          <div className={this.cnHeader('Icon')} />
          <h1 className={this.cnHeader('Title')} />
          <section className={this.cnTile('Info', ['Info'])}>
            <p className={this.cnInfo('Source')} />
            <time className={this.cnInfo('Time')} />
          </section>
        </header>
        <p className={this.cnTile('Description')} />
      </article>
    );
  }
}
