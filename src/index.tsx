import * as React from 'react';
import * as ReactDOM from 'react-dom';

//todo: Подключить юзер детектор
//import DeviceDetector from 'device-detector-js/dist/index';

//todo: переключение с помощью подключения import

import { App } from './components/App/App@desktop';
//import { App } from './components/App/App@mobile';

ReactDOM.render(<App />, document.querySelector('.root'));
