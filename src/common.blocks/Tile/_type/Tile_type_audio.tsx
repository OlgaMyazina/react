import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { ITileProps } from '../index';
import Base from '../Tile';

const TileType: ModBody<ITileProps> = (Base, { text, className }) => <a className={className} />;

export const TileTypeAudio = withBemMod<ITileProps>('Tile', { type: 'audio' }, TileType);
