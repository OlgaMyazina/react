import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { cn, ClassNameFormatter, classnames } from '@bem-react/classname';

import Picture from '../Picture';
import { IPictureProps } from '../Picture/Picture';
import { IClassNameProps } from '@bem-react/core';

interface ILogoProps extends IClassNameProps {
  className?: string;
}

export default class Logo extends Component<ILogoProps> {
  cnLogo: ClassNameFormatter;
  logoProps: IPictureProps;
  cnClassName: string;
  constructor(props: any) {
    super(props);
    this.cnClassName = this.props.className;
    this.cnLogo = cn('Logo');
    //todo: вынести данные для лого
    this.logoProps = {
      className: this.cnLogo('Picture'),
      sourceSrcset: './images/logo.svg',
      imgSrc: './images/logo.svg',
      imgSrcset: './images/logo@2x.png 2x',
      imgAlt: 'Яндекс дом'
    };
  }
  render() {
    return (
      <div className={this.cnLogo(null, [this.cnClassName])}>
        <a href="#" className={`${this.cnLogo('Href')}`}>
          <Picture {...this.logoProps} />
        </a>
      </div>
    );
  }
}
