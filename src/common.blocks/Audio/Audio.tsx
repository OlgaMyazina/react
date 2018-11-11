import { Component } from 'react';
import React = require('react');
import { cn } from '@bem-react/classname';
import { Button } from '../Button';

export interface IAudioData {
  albumcover: string;
  artist: string;
  track: {
    name: string;
    length: string;
  };
  volume: string;
}

interface IAudioProps {
  audioData: IAudioData;
  className: string;
}

export default class Audio extends Component<IAudioProps> {
  cnAudio = cn(this.props.className);
  render() {
    return (
      <section className={this.cnAudio()}>
        <div
          className={this.cnAudio('Cover')}
          style={{ backgroundImage: `url(images/${this.props.audioData.albumcover}.svg)` }}
        />
        <p className={this.cnAudio('Artist')}>{this.props.audioData.artist}-</p>
        <p className={this.cnAudio('TrackName')}>{this.props.audioData.track.name}</p>
        <label className={this.cnAudio('TrackDuration')}>
          <input type="range" className={this.cnAudio('Track')} min="0" max={this.props.audioData.track.length} />
        </label>
        <Button picture="next" />
        <Button picture="pred" />
        <label className={this.cnAudio('VolumeValue')}>
          <input
            type="range"
            className={this.cnAudio('Volume')}
            defaultValue={this.props.audioData.volume}
            min="0"
            max="100"
          />
        </label>
      </section>
    );
  }
}
