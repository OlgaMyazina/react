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
  cnNav: ClassNameFormatter;
  className: string;
  list: [];
  constructor(props: any) {
    super(props);
    this.list = props.list;
    this.className = props.className;
    this.cnNav = cn('Nav');
  }
  render() {
    return (
      <ul className={this.cnNav()}>
        {this.list.map((item, index) => {
          return (
            <li key={index} className={this.cnNav('Item')}>
              <a href="#" className={`${this.cnNav('Link', ['ItemLink'])}`}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}