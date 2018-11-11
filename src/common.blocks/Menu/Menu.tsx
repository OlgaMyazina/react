import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { cn, ClassNameFormatter } from '@bem-react/classname';
import Nav from '../Nav';

interface IMenuProps {
  isOpen: boolean;
}

export default class Menu extends Component<IMenuProps> {
  cnMenu: ClassNameFormatter;
  constructor(props: IMenuProps) {
    super(props);
    this.cnMenu = cn('Menu');
  }
  //todo: вынести данные
  render() {
    return (
      <Nav
        list={['События', 'Сводка', 'Устройства', 'Сценарии']}
        className={this.cnMenu({ isOpen: this.props.isOpen })}
      />
    );
  }
}
