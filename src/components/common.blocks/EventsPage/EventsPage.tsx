import * as React from 'react';

import { Tile } from '../Tile';
import {
  DeviceEvent,
  EventData,
  EventDataAudio,
  EventDataGraph,
  EventDataImage,
  EventDataButtons,
  EventDataClimat
} from '.';

export default class EventsPage extends React.Component {
  events: [] = [];
  componentDidMount() {
    fetch('data/events.json')
      .then(res => res.json())
      .then(data => {
        this.events = data.events;
        this.forceUpdate();
      });
  }
  isEventDataAudio(eventData: EventData): eventData is EventDataAudio {
    return typeof (eventData as EventDataAudio).track !== 'undefined';
  }

  isEventDataGraph(eventData: EventData): eventData is EventDataGraph {
    return typeof (eventData as EventDataGraph).type !== 'undefined';
  }

  isEventDataImage(eventData: EventData): eventData is EventDataImage {
    return typeof (eventData as EventDataImage).image !== 'undefined';
  }

  isEventDataButtons(eventData: EventData): eventData is EventDataButtons {
    return typeof (eventData as EventDataButtons).buttons !== 'undefined';
  }
  isEventDataClimat(eventData: EventData): eventData is EventDataClimat {
    return typeof (eventData as EventDataClimat).temperature !== 'undefined';
  }

  getDataType(eventData: any): string {
    let dataType: string = 'null';
    if (eventData) {
      if (this.isEventDataAudio(eventData)) dataType = 'audio';
      if (this.isEventDataButtons(eventData)) dataType = 'buttons';
      if (this.isEventDataClimat(eventData)) dataType = 'climate';
      if (this.isEventDataGraph(eventData)) dataType = 'graph';
      if (this.isEventDataImage(eventData)) dataType = 'image';
    }
    return dataType;
  }

  render() {
    return (
      <main className="EventsPage">
        {this.events.map((event: DeviceEvent, index: number) => {
          return (
            <Tile
              key={index}
              event={event}
              size={event.size}
              type={event.type}
              dataType={this.getDataType(event.data)}
            />
          );
        })}
      </main>
    );
  }
}
