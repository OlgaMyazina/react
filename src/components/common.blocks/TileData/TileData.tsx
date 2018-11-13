import * as React from 'react';
import { Component, Fragment } from 'react';

import './TileData.css';

import { ITileDataProps } from './index';

export default class TileData extends Component<ITileDataProps> {
  render() {
    return <div className={this.props.className} />;
  }
}
