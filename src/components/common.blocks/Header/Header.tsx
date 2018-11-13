import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { cn } from '@bem-react/classname';

import './Header.css';

import Logo from '../Logo/Logo';
import Menu from '../Menu';
import { Button } from '../Button';
//import './Header.css';

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
    console.log(`click`);
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    console.log(this.state);
    return (
      <header className={cnHeader()}>
        <Logo className={cnHeader('Logo')} />
        <Menu className={cnHeader('Menu')} isOpen={this.state.isOpen} />
        <Button className={cnHeader('Button')} text="" picture="burger" onClick={this.handleClick} />
      </header>
    );
  }
}
