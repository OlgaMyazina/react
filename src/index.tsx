import * as React from 'react';
import { Component, Fragment } from 'react';
import * as ReactDOM from 'react-dom';

//import DeviceDetector from 'device-detector-js';

import { App } from './components/App/App@desktop';
//import { App } from './components/App/App@mobile';
//import Logo from './Logo';
import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
//import { Header } from './common.blocks/Header@desktop';

ReactDOM.render(<App />, document.querySelector('.root'));
