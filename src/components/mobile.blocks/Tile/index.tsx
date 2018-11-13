import BaseTile from '../../common.blocks/Tile/Tile';
import './Tile@mobile.css';
import './_size/Tile_size@mobile.css';

import { cn } from '@bem-react/classname';
import { ITileProps } from '../../common.blocks/Tile';
import React = require('react');
const cnTile = cn('Tile');

export const Tile = (props: ITileProps) => <BaseTile className={cnTile({ size: props.size })} {...props} />;
