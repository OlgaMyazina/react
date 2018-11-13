import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';

import './Tile_size_s.css';
//import { cn } from '@bem-react/classname';
import { ITileProps } from '../index';
import Base from '../Tile';

export interface ITileSIzeSProps extends ITileProps {
  size: 's';
}

export const TileSizeS = withBemMod<ITileSIzeSProps>('Tile', { size: 's' });
