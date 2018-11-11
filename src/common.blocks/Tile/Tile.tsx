import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { cn, ClassNameFormatter } from '@bem-react/classname';

import { ITileProps } from './index';
import { DeviceEvent } from '../EventsPage';
import Icon from '../Icon';

export default class Tile extends Component<ITileProps> {
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
          <Icon className={this.cnHeader('Icon')} urlName={this.event.icon} />
          <h1 className={this.cnHeader('Title')}>{this.event.title}</h1>
          <section className={this.cnTile('Info', ['Info'])}>
            <p className={this.cnInfo('Source')}>{this.event.source}</p>
            <time className={this.cnInfo('Time')}>{this.event.time}</time>
          </section>
        </header>
        <p className={this.cnTile('Description')} />
      </article>
    );
  }
}
