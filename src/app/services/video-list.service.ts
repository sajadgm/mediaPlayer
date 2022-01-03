import { IvideoList } from './../interfaces/videoList-interface';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoListService implements OnInit {
  selectedVideoIndex!: number | undefined;
  totalVideoList: IvideoList[] = [
    {
      id: 1,
      name: 'video1',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4',
      type: 'video/mp4',
    },
    {
      id: 2,
      name: 'video2',
      src: 'http://static.videogular.com/assets/videos/videogular.ogg',
      type: 'video/ogg',
    },
    {
      id: 3,
      name: 'video3',
      src: 'http://static.videogular.com/assets/videos/videogular.webm',
      type: 'video/webm',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // this.currentPlay = this.totalVideoList[1];
  }

  setSelectedVideo(id: number) {
    this.selectedVideoIndex = id - 1;
  }
}
