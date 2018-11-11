import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { cn, ClassNameFormatter } from '@bem-react/classname';

import Picture from '../Picture';
import { IPictureProps } from '../Picture/Picture';

export default class Logo extends Component {
  cnLogo: ClassNameFormatter;
  logoProps: IPictureProps;
  constructor(props: {}) {
    super(props);
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
      <div className={this.cnLogo()}>
        <a href="#" className={`${this.cnLogo('Href')}`}>
          <Picture {...this.logoProps} />
        </a>
      </div>
    );
  }
}
