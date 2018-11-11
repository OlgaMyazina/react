import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';
import { App as AppCommon } from './App';
import Logo from '../common.blocks/Logo';

const cnApp = cn('App');
const cnLogo = cn('Logo');

// registry with desktop versions of components
const registry = new Registry({ id: cnApp() });

registry.set(cnLogo(), Logo);

export const App = withRegistry(registry)(AppCommon);
