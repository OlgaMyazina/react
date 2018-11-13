import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { cn, ClassNameFormatter } from '@bem-react/classname';

import './Tile.css';

import { ITileProps } from './index';
import { DeviceEvent } from '../EventsPage';
import Icon from '../Icon';
import { TileData } from '../TileData';
import { Header } from '../../desktop.blocks/Header/Header@desktop';
import { TileHeader } from './TileHeader';

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
        <TileHeader
          type={this.props.event.type}
          className={this.cnTile('Header')}
          urlName={this.props.event.icon}
          title={this.props.event.title}
          source={this.props.event.source}
          time={this.props.event.time}
        />
        <section className={this.cnTile('InfoData')}>
          <p className={this.cnTile('Description')}>{this.props.event.description}</p>
          <TileData className={this.cnTile('Data')} dataType={this.props.dataType} data={this.props.event.data} />
        </section>
      </article>
    );
  }
}
/**
 * {
	"resource": "/Users/olga/Documents/ШРИ/Домашние работы/react-bem-core/src/components/common.blocks/Tile/Tile.tsx",
	"owner": "typescript",
	"code": "2322",
	"severity": 8,
  "message": "Тип "{ classname: string; urlName: string; title: string; source: string; time: string; }
  " не может быть назначен для типа 
  "Readonly<ITileHeaderProps>\".\n  Свойство \"event\" отсутствует в типе \
     "{ classname: string; urlName: string; title: string; source: string; time: string; }\".",
	"source": "ts",
	"startLineNumber": 35,
	"startColumn": 8,
	"endLineNumber": 35,
	"endColumn": 18
}
 */
