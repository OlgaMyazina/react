import * as React from 'react';

import './Header@mobile.css';

import HeaderCommon from './Header';

export class Header extends HeaderCommon {
  protected attrs() {
    return {
      //onTouchMove: this.onPointerEnter,
      //onTouchEnd: this.onPointerLeave
    };
  }
}
