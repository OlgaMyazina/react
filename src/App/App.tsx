import * as React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
//import { IButtonProps } from '../Button/Button';
import Header from '../common.blocks/Header';
import Logo from '../common.blocks/Logo';
import Menu from '../common.blocks/Menu';

const cnApp = cn('App');
const cnLogo = cn('Logo');
//const cnHeader = cn('Header');

export const App: React.SFC = () => (
  <RegistryConsumer>
    {registries => {
      // reading App registry
      const registry = registries[cnApp()];
      //const Logo = registry.get(cnLogo());
      // taking desktop or mobile version
      //const Button = registry.get<IButtonProps>(cnHeader());

      return (
        <div>
          <Header />
        </div>
      );
      //return <Button text="Hello there!" />;
    }}
  </RegistryConsumer>
);
