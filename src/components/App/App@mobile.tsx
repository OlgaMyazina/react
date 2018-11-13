import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';
import { App as AppCommon } from './App';
import './App@mobile.css';
import { Header } from '../mobile.blocks/Header/Header@mobile';
import { EventsPage } from '../mobile.blocks/EventsPage/EventsPage@mobile';

const cnApp = cn('App');
const cnHeader = cn('Header');
const cnEventsPage = cn('EventsPage');

// registry with mobile versions of components
const registry = new Registry({ id: cnApp() });

registry.set(cnHeader(), Header);
registry.set(cnEventsPage(), EventsPage);

export const App = withRegistry(registry)(AppCommon);
