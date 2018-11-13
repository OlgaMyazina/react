import { withBemMod } from '@bem-react/core';

import './Tile_size_l';

import { ITileProps } from '../../../common.blocks/Tile/index';
import './Tile_size_l.css';

export const TileSizeL = withBemMod<ITileProps>('Tile', { size: 'l' });
