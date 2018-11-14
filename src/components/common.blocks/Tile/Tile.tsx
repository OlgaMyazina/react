import * as React from 'react';
import { Component } from 'react';
import { cn } from '@bem-react/classname';

import './Tile.css';

import { ITileProps } from './index';
import { DeviceEvent } from '../EventsPage';
import { TileData } from './TileData';
import { TileHeader } from './TileHeader';

export default class Tile extends Component<ITileProps> {
  event: DeviceEvent;

  cnTile = cn('Tile');
  cnApp = cn('App');

  render() {
    return (
      <article className={this.props.className}>
        <TileHeader
          type={this.props.event.type}
          className={this.cnTile('Header')}
          urlName={this.props.event.icon}
          title={this.props.event.title}
          source={this.props.event.source}
          time={this.props.event.time}
          size={this.props.event.size}
        />
        <section className={this.cnTile('InfoData')}>
          <p className={this.cnTile('Description', { size: this.props.size })}>{this.props.event.description}</p>
          <TileData className={this.cnTile('Data')} dataType={this.props.dataType} data={this.props.event.data} />
        </section>
      </article>
    );
  }
}
