import * as React from 'react'

export interface AudioProps {
  url: string,
  loop: boolean
}

export default class Audio extends React.Component<AudioProps, {}> {
  public render() {
    return (
      <div className='audio'>音乐播放器</div>
    );
  }
}
