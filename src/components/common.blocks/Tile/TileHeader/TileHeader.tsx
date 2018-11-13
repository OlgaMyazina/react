import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { cn, ClassNameFormatter } from '@bem-react/classname';

import './TileHeader.css';

import Icon from '../../Icon';

export interface ITileHeaderProps {
  className?: string;
  urlName?: string;
  title?: string;
  source?: string;
  time?: string;
  type?: string;
}

export default class TileHeader extends Component<ITileHeaderProps> {
  cnHeader = cn('Tile');

  render() {
    return (
      <header className={this.cnHeader('Header', [this.props.className])}>
        <Icon className={this.cnHeader('Icon')} urlName={this.props.urlName} />
        <h1 className={this.cnHeader('Title')}>{this.props.title}</h1>
        <section className={this.cnHeader('Info', ['Info'])}>
          <p className={this.cnHeader('Source')}>{this.props.source}</p>
          <time className={this.cnHeader('Time')}>{this.props.time}</time>
        </section>
      </header>
    );
  }
}

/*
TS2322: Type '{ classname: string; urlName: string; title: string; source: string; time: string; }' is not assignable to type 'Readonly<ITileHeaderProps>'.
  Property 'event' is missing in type '{ classname: string; urlName: string; title: string; source: string; time: string; }'
*/
/*
TS2322: Type '{ type: string; className: string; urlName: string; title: string; source:string; time: string; }' is not assignable to type 'ITileTypeCriticalProps'.
  Property 'event' is missing in type '{ type: string; className: string; urlName: string; title: string; source: string; time: string; }'.
  */
