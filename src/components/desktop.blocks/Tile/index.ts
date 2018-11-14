import { compose } from '@bem-react/core';

import Base from './../../common.blocks/Tile/Tile';
import { TileSizeS } from '../../desktop.blocks/Tile/_size/Tile_size_s';
import { TileSizeM } from '../../desktop.blocks/Tile/_size/Tile_size_m';
import { TileSizeL } from '../../desktop.blocks/Tile/_size/Tile_size_l';

export const Tile = compose(
  TileSizeS,
  TileSizeM,
  TileSizeL
)(Base);
