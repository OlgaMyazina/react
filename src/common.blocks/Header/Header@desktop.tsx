import * as React from 'react';
import HeaderCommon from './Header';

export class Header extends HeaderCommon {
  protected attrs() {
    return {
      //onMouseEnter: this.onPointerEnter,
      //onMouseLeave: this.onPointerLeave
    };
  }
}
