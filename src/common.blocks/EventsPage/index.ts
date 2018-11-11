import EventsPage from './EventsPage';
import './EventsPage.css';
export default EventsPage;

export interface DeviceEvent {
  type: string;
  title: string;
  source: string;
  time: string;
  description: null | string;
  icon: string;
  data: EventData | undefined;
  size: EventSize;
}

export type EventData = EventDataAudio | EventDataGraph; //| EventDataImage | EventDataButtons | EventDataClimat;

export type EventSize = 's' | 'm' | 'l';

export interface EventDataAudio {
  albumcover: string;
  artist: string;
  track: {
    name: string;
    length: string;
  };
  volume: number;
}
export interface EventDataGraph {
  type: 'graph';
  values: object[];
}
export interface EventDataImage {
  image: string;
}
export interface EventDataButtons {
  buttons: string[];
}

export interface EventDataClimat {
  temperature: number;
  humidity: number;
}
