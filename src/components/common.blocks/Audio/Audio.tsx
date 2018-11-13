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
  cnAudio = cn('Audio');
  render() {
    return (
      <section className={this.cnAudio()}>
        <div className={this.cnAudio('Cover')} style={{ backgroundImage: `url(${this.props.audioData.albumcover})` }} />
        <div className={this.cnAudio('ArtistBlock')}>
          <p className={this.cnAudio('Artist')}>{this.props.audioData.artist}-</p>
          <p className={this.cnAudio('TrackName')}>{this.props.audioData.track.name}</p>
        </div>
        <label className={this.cnAudio('TrackDuration')}>
          <input type="range" className={this.cnAudio('Track')} min="0" max={this.props.audioData.track.length} />
        </label>

        <Button picture="next" urlImg="images/Next.svg" />
        <Button picture="prev" urlImg="images/Prev.svg" />
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
