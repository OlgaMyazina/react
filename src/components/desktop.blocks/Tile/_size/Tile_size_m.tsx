import { withBemMod } from '@bem-react/core';

import './Tile_size_m.css';

import { ITileProps } from '../../../common.blocks/Tile/index';

export const TileSizeM = withBemMod<ITileProps>('Tile', { size: 'm' });
