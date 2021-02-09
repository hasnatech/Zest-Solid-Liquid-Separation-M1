import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainService } from 'src/app/service/main.service';
@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.scss']
})
export class AudioplayerComponent implements AfterViewInit {

  currentTime;
  totalTime;
  currentTimeStr;
  totalTimeStr;
  play = true;

  @ViewChild('audioPlayer', { static: false }) audioPlayer: ElementRef;
  audioElem;

  constructor(public service: MainService) { }

  ngAfterViewInit(): void {

    //audio
    this.audioElem = this.audioPlayer.nativeElement;

    console.log('ngAfterViewInit');

    this.audioElem.onplay = () => {
      this.service.getTimeline().play();
      this.play = true;
    };

    this.audioElem.onpause = () => {
      this.service.getTimeline().pause();
      this.play = false;
    };

    this.audioElem.onseeked = () => {
      this.service.getTimeline().time(this.audioElem.currentTime);
    };

    this.audioElem.onended = () => {
      this.service.getTimeline().pause();
      this.play = false;
      this.service.showNav = true;

    };

    this.audioElem.ontimeupdate = () => {

      this.currentTime = this.audioElem.currentTime;
      this.totalTime = this.audioElem.duration;

      this.currentTimeStr = this.convertTominSec(this.currentTime);
      this.totalTimeStr = this.convertTominSec(this.totalTime);
      // console.log(this.currentTime);
    };

  }

  convertTominSec(time) {
    if (isNaN(time)) {
      return '00:00';
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    const minutestr = minutes < 10 ? '0' + minutes : minutes;
    const secondstr = seconds < 10 ? '0' + seconds : seconds;
    return minutestr + ':' + secondstr;
  }

  audioPP() {
    if (this.service.getAudio() !== 'assets/media/') {
      if (this.play === false) {
        this.audioElem.play();
      } else {
        this.audioElem.pause();
      }
      this.play = !this.play;
    }
  }
  mouseDown(event) {
    if (this.service.getAudio() !== 'assets/media/') {
      const per = event.layerX / event.target.offsetWidth;
      this.audioElem.currentTime = this.totalTime * per;
      this.audioElem.pause();
      this.play = false;
      // console.log('drop', per);
    }
  }
  audioPlay() {
    this.audioElem.play();
    this.play = true;
  }

  restartaudio() {
    this.audioElem.currentTime = 0;
    this.audioElem.pause();
    this.play = false;
    this.audioPlay();

    // console.log('drop', per);
  }
}



