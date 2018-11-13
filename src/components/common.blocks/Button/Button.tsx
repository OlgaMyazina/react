import * as React from 'react';
import { Component } from 'react';

import { IButtonProps } from './index';

export default class Button extends Component<IButtonProps> {
  render() {
    return (
      <div
        className={this.props.className}
        onClick={() => {
          this.props.onClick;
        }}
      >
        {this.props.text}
      </div>
    );
  }
}
