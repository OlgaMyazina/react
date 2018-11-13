import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { cn, ClassNameFormatter } from '@bem-react/classname';

import './Nav.css';

interface IList {
  list: string[];
}
interface IClassName {
  className?: string;
}

export default class Nav extends Component<IList & IClassName> {
  list = this.props.list;

  cnNav = cn('Nav');

  render() {
    return (
      <ul className={this.cnNav(null, [this.props.className])}>
        {this.list.map((item, index) => {
          return (
            <li key={index} className={this.cnNav('Item', [this.props.className])}>
              <a href="#" className={`${this.cnNav('Link', ['ItemLink', this.props.className])}`}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}
