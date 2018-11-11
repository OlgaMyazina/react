import { compose, IClassNameProps } from '@bem-react/core';

import Base from './TileData';
import { TileDataGraph } from './_dataType/TileData_dataType_graph';
import { TileDataAudio } from './_dataType/TileData_dataType_audio';
import { EventData } from '../EventsPage';

export type DataType = 'audio' | 'graph'; /*| 'buttons' | 'climate' | 'graph' | 'image' | 'null';*/

export interface ITileDataProps extends IClassNameProps {
  dataType?: DataType;
  data?: EventData;
}

export const TileData = compose(
  TileDataGraph,
  TileDataAudio
)(Base);
