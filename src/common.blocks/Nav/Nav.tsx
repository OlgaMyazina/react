import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { cn, ClassNameFormatter } from '@bem-react/classname';

interface IList {
  list: string[];
}
interface IClassName {
  class?: string;
}

export default class Nav extends Component<IList & IClassName> {
  cnNav: ClassNameFormatter;
  class: string;
  list: [];
  constructor(props: any) {
    super(props);
    this.list = props.list;
    this.class = props.class;
    this.cnNav = cn('Nav');
  }
  render() {
    return (
      <nav className={this.class}>
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
      </nav>
    );
  }
}
