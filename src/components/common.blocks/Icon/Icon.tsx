import * as React from 'react';
import { Component } from 'react';

interface IClassName {
  className: string;
}
interface IUrlName {
  urlName: string;
}

export default class Icon extends Component<IUrlName & IClassName> {
  icoNameUrl: string;
  className: string;
  constructor(props: any) {
    super(props);
    this.icoNameUrl = this.props.urlName;
    this.className = this.props.className;
  }
  render() {
    return (
      <div className={`${this.className} Icon`} style={{ backgroundImage: `url(images/${this.icoNameUrl}.svg)` }} />
    );
  }
}
