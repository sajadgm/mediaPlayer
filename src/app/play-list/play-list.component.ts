import { IvideoList } from './../interfaces/videoList-interface';
import { Component, OnInit } from '@angular/core';
import { VideoListService } from '../services/video-list.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss'],
})
export class PlayListComponent implements OnInit {
  List: IvideoList[] = [];
  constructor(private _vls: VideoListService) {}

  ngOnInit(): void {
    this.List = this._vls.totalVideoList;
  }

  PlaySelectedVideo(videoData: IvideoList): void {
    this._vls.setSelectedVideo(videoData.id);
  }
}
