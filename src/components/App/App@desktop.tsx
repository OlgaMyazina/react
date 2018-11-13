import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';
import { App as AppCommon } from './App';
import './App@desktop.css';
import { Header } from '../desktop.blocks/Header/Header@desktop';
//import { Header } from '../desktop.blocks/Header/Header@desktop';
import { EventsPage } from '../desktop.blocks/EventsPage/EventsPage@desktop';

const cnApp = cn('App');
const cnHeader = cn('Header');
const cnEventsPage = cn('EventsPage');

// registry with desktop versions of components
const registry = new Registry({ id: cnApp() });

registry.set(cnHeader(), Header);
registry.set(cnEventsPage(), EventsPage);

export const App = withRegistry(registry)(AppCommon);
