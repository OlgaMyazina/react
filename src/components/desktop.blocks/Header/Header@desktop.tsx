import * as React from 'react';
import HeaderCommon from '../../common.blocks/Header/Header';

import './Header@desktop.css';

//import Menu from '../Menu/Menu@desktop';

export class Header extends HeaderCommon {
  protected attrs() {
    return {
      //onMouseEnter: this.onPointerEnter,
      //onMouseLeave: this.onPointerLeave
    };
  }
}
