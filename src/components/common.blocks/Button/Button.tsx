import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { cn, ClassNameFormatter } from '@bem-react/classname';

import { IButtonProps } from './index';

export default class Button extends Component<IButtonProps> {
  text: string;
  className: string;
  cnButton: ClassNameFormatter;
  constructor(props: any) {
    super(props);
    this.cnButton = cn('Button');
    this.text = props.text;
    this.className = props.className;
  }

  render() {
    return (
      <div
        className={this.className}
        onClick={() => {
          this.props.onClick;
        }}
      >
        {this.text}
      </div>
    );
  }
}
