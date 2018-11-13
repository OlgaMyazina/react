import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';
import { App as AppCommon } from './App';
import './App@mobile.css';
import { Header } from '../common.blocks/Header/Header@mobile';

const cnApp = cn('App');
const cnHeader = cn('Header');

// registry with mobile versions of components
const registry = new Registry({ id: cnApp() });

registry.set(cnHeader(), Header);

export const App = withRegistry(registry)(AppCommon);
