import * as React from 'react';
import { Component } from 'react';
import { cn } from '@bem-react/classname';

import './Header.css';

import Logo from '../Logo/Logo';
import Menu from '../Menu';
import { Button } from '../Button';

const cnHeader = cn('Header');

export interface IHeaderProps {
  className?: string;
}
export interface IState {
  isOpen: boolean;
}

export default class Header extends Component<IHeaderProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <header className={cnHeader()}>
        <Logo className={cnHeader('Logo')} />
        <Menu className={cnHeader('Menu')} isOpen={this.state.isOpen} />
        <Button className={cnHeader('Button')} text="" picture="burger" onClick={this.handleClick} />
      </header>
    );
  }
}
