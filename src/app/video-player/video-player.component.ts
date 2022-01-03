import { IvideoList } from './../interfaces/videoList-interface';
import { VideoListService } from './../services/video-list.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit {
  selectedVideoIndex!: number | undefined;
  player!: IvideoList;
  constructor(
    private _vls: VideoListService //video list service
  ) {}

  ngOnInit(): void {
    let videolist = this._vls.totalVideoList;
    if (this._vls.selectedVideoIndex) {
      this.player = videolist[this._vls.selectedVideoIndex];
    } else {
      this.player = videolist[Math.floor(Math.random() * videolist.length)];
    }
  }
}
