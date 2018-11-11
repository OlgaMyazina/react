

export default class EventPage {
  mount(){
fetch('data/events.json')
  .then(res => res.json())
  .then(data => this.renderEvents(data.events));}

  renderEvents(events: DeviceEvent[]): void {
    if (this.containerElement) {
      events.forEach(
        (event: DeviceEvent): void => {
          const eventElement = new Tile(event);
          if (this.contentElement) this.contentElement.appendChild(eventElement.createEventElement());
          else this.containerElement.appendChild(eventElement.createEventElement());
        }
      );
      //touchEvents.touchEvent();
    }
  }