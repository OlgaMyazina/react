import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { cn, ClassNameFormatter } from '@bem-react/classname';

export interface IPictureProps {
  className: string;
  sourceSrcset: string;
  imgSrc: string;
  imgSrcset: string;
  imgAlt: string;
}

export default class Picture extends Component<IPictureProps> {
  render() {
    return (
      <picture className={this.props.className}>
        <source srcSet={`${this.props.sourceSrcset}`} type="image/svg+xml" />
        <img src={this.props.imgSrc} srcSet={`${this.props.imgSrcset}`} alt={this.props.imgAlt} />
      </picture>
    );
  }
}
