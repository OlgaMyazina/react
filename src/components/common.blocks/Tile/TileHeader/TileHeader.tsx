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
  size?: string;
}

export default class TileHeader extends Component<ITileHeaderProps> {
  cnHeader = cn('TileHeader');

  render() {
    return (
      <header className={this.cnHeader(this.props.className)}>
        <Icon className={this.cnHeader('Icon')} urlName={this.props.urlName} />
        <h1 className={this.cnHeader('Title')}>{this.props.title}</h1>
        <p className={this.cnHeader('Source', { size: this.props.size })}>{this.props.source}</p>
        <time className={this.cnHeader('Time', { size: this.props.size })}>{this.props.time}</time>
      </header>
    );
  }
}
