import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { cn, ClassNameFormatter } from '@bem-react/classname';

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
