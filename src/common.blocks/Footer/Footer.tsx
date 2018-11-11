import * as React from 'react';
import { Component, Fragment } from 'react';
import { cn } from '@bem-react/classname';

import Nav from '../Nav';

export default class Footer extends Component {
  cnFooter = cn('Footer');
  render() {
    return (
      <footer className={this.cnFooter()}>
        <Nav
          className={this.cnFooter('Nav')}
          list={['Помощь', 'Обратная связь', 'Разработчикам', 'Условия использования']}
        />
        <p className={this.cnFooter('Copy')}>© 2001–2017 ООО «Яндекс»</p>
      </footer>
    );
  }
}
