import * as React from 'react';
import { Component } from 'react';
import { cn, ClassNameFormatter } from '@bem-react/classname';

import Nav from '../Nav';

interface IMenuProps {
  className?: string;
  isOpen: boolean;
}

export default class Menu extends Component<IMenuProps> {
  cnMenu: ClassNameFormatter;
  cnClassName: string;
  constructor(props: IMenuProps) {
    super(props);
    this.cnClassName = this.props.className;
    this.cnMenu = cn('Menu');
  }
  //todo: вынести данные
  render() {
    return (
      <nav className={this.cnMenu({ isOpen: this.props.isOpen }, [this.cnClassName])}>
        <Nav
          list={['События', 'Сводка', 'Устройства', 'Сценарии']}
          className={this.cnMenu({ isOpen: this.props.isOpen }, [this.cnClassName])}
        />
      </nav>
    );
  }
}
