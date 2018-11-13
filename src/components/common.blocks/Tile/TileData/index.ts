import { compose, IClassNameProps } from '@bem-react/core';

import Base from './TileData';
import { TileDataGraph } from './_dataType/TileData_dataType_graph';
import { TileDataAudio } from './_dataType/TileData_dataType_audio';
import { EventData } from '../../EventsPage';
import { TileDataButton } from './_dataType/TileData_dataType_buttons';
import { TileDataImage } from './_dataType/TileData_dataType_image';
import { TileDataClimate } from './_dataType/TileData_dataType_climate';

export type DataType = 'audio' | 'graph' | 'buttons' | 'climate' | 'graph' | 'image' | 'null';

export interface ITileDataProps extends IClassNameProps {
  dataType?: DataType;
  data?: EventData;
  text?: string;
}

export const TileData = compose(
  TileDataGraph,
  TileDataAudio,
  TileDataButton,
  TileDataImage,
  TileDataClimate
)(Base);
