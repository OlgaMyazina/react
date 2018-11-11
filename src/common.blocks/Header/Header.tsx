import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { cn } from '@bem-react/classname';

import Logo from '../Logo/Logo';
import Menu from '../Menu';
import { Button } from '../Button';

const cnHeader = cn('Header');
interface IState {
  isOpen: boolean;
}

export default class Header extends Component<{}, IState> {
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
        <Logo />
        <Menu isOpen={this.state.isOpen} />
        <Button text="" picture="burger" onClick={this.handleClick} />
      </header>
    );
  }
}
