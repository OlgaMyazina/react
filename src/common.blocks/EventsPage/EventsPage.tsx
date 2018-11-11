import * as React from 'react';

import { Tile } from '../Tile';
import { DeviceEvent } from '.';

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

  render() {
    return (
      <main className="EventsPage">
        {this.events.map((event: DeviceEvent, index: number) => {
          return <Tile key={index} event={event} size={event.size} type={event.type} />;
        })}
      </main>
    );
  }
}
