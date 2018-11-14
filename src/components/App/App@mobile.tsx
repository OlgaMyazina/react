import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';
import { App as AppCommon } from './App';

import './App@mobile.css';

import { Header } from '../mobile.blocks/Header/Header@mobile';
import { EventsPage } from '../mobile.blocks/EventsPage/EventsPage@mobile';
import { Tile } from '../mobile.blocks/Tile';
import { Audio } from '../mobile.blocks/Audio';
import { Button } from '../mobile.blocks/Button';

const cnApp = cn('App');
const cnHeader = cn('Header');
const cnEventsPage = cn('EventsPage');
const cnTile = cn('Tile');
const cnAudio = cn('Audio');
const cnButton = cn('Button');

const registry = new Registry({ id: cnApp() });

registry.set(cnHeader(), Header);
registry.set(cnEventsPage(), EventsPage);
registry.set(cnTile(), Tile);
registry.set(cnAudio(), Audio);
registry.set(cnButton(), Button);

export const App = withRegistry(registry)(AppCommon);
