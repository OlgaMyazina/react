import { withBemMod } from '@bem-react/core';

import './Tile_size_s.css';

import { ITileProps } from '../../../common.blocks/Tile/index';

export const TileSizeS = withBemMod<ITileProps>('Tile', { size: 's' });
