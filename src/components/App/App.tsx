import * as React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

import './App.css';

//import { IButtonProps } from '../Button/Button';

import Header from '../common.blocks/Header';
import EventsPage from '../common.blocks/EventsPage/EventsPage';
import Footer from '../common.blocks/Footer/Footer';
import { IHeaderProps } from '../common.blocks/Header/Header';

const cnApp = cn('App');
const cnHeader = cn('Header');
const cnEventsPage = cn('EventsPage');

export const App: React.SFC = () => (
  <RegistryConsumer>
    {registries => {
      // reading App registry
      console.log(registries);
      const registry = registries[cnApp()];
      const Header = registry.get<IHeaderProps>(cnHeader());
      const EventsPage = registry.get(cnEventsPage());
      // taking desktop or mobile version
      //const Button = registry.get<IButtonProps>(cnHeader());

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
      //return <Button text="Hello there!" />;
    }}
  </RegistryConsumer>
);
