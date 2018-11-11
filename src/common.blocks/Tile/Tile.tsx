import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { cn, ClassNameFormatter } from '@bem-react/classname';

import { ITileProps } from './index';
import { DeviceEvent } from '../EventsPage';
import Icon from '../Icon';
import { TileData } from '../TileData';

export default class Tile extends Component<ITileProps> {
  event: DeviceEvent;

  cnTile: ClassNameFormatter;
  cnHeader: ClassNameFormatter;
  cnInfo: ClassNameFormatter;
  constructor(props: any) {
    super(props);
    this.cnTile = cn('Tile');
    this.cnHeader = cn('Header');
    this.cnInfo = cn('Info');
  }

  getCnTile() {
    return this.cnTile;
  }

  render() {
    return (
      <article className={this.props.className}>
        <header className={this.cnTile('Header')}>
          <Icon className={this.cnHeader('Icon')} urlName={this.props.event.icon} />
          <h1 className={this.cnHeader('Title')}>{this.props.event.title}</h1>
          <section className={this.cnTile('Info', ['Info'])}>
            <p className={this.cnInfo('Source')}>{this.props.event.source}</p>
            <time className={this.cnInfo('Time')}>{this.props.event.time}</time>
          </section>
        </header>
        <p className={this.cnTile('Description')} />
        <TileData className={this.cnTile('Data')} dataType={this.props.dataType} data={this.props.event.data} />
      </article>
    );
  }
}

/**
 * Тип "{ className: string; dataType: DataType; data: EventData; }" не может быть назначен для типа "(IntrinsicAttributes & ITileDataProps & ITileDataGraph & { children?: ReactNode; }) | (IntrinsicAttributes & ITileDataProps & ITileDataAudio & { children?: ReactNode; })".
  Тип "{ className: string; dataType: DataType; data: EventData; }" не может быть назначен для типа "ITileDataAudio".
    Типы свойства "data" несовместимы.
      Тип "EventData" не может быть назначен для типа "IAudioData".
        Тип "EventDataGraph" не может быть назначен для типа "IAudioData".
          Свойство "albumcover" отсутствует в типе "EventDataGraph".
 */
