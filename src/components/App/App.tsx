import * as React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

import './App.css';

import Footer from '../common.blocks/Footer/Footer';
import { IHeaderProps } from '../common.blocks/Header/Header';

const cnApp = cn('App');
const cnHeader = cn('Header');
const cnEventsPage = cn('EventsPage');

export const App: React.SFC = () => (
  <RegistryConsumer>
    {registries => {
      const registry = registries[cnApp()];
      const Header = registry.get<IHeaderProps>(cnHeader());
      const EventsPage = registry.get(cnEventsPage());

      return (
        <div className="Page">
          <Header />
          <div className="Page-Container">
            <h1 className="Page-H1">Лента событий</h1>
            <EventsPage />
          </div>
          <Footer />
        </div>
      );
    }}
  </RegistryConsumer>
);
