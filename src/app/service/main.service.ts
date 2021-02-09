import { Injectable } from '@angular/core';
import { gsap, TimelineMax, Power0, Power3 } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private audio: string;
  private tl = new TimelineMax();
  showHeader;
  showNav = false;
  end = false;

  constructor() {
    gsap.registerPlugin(CSSPlugin);
    gsap.registerPlugin(ScrollToPlugin);
    gsap.ticker.lagSmoothing(0);
  }

  setHeder(bol: boolean) {
    this.showHeader = bol;
  }

  animate(name = "") {

    // console.log(this.tl)
    this.tl.clear();
    gsap.ticker.lagSmoothing(0);
    this.tl = new TimelineMax();

    // console.log(2, this.tl)
    //  gsap.to(myDiv, { duration: 2, scrollTo: 250 });
    let elems;
    if (name == "") {
      elems = document.querySelectorAll('[data-animatetime]');
    } else {
      elems = document.querySelectorAll('[data-animatename=' + name + ']');
      // console.log(elems);
    }
    elems.forEach(element => {
      if (element['dataset'].animatetype == 'scroll') {
        // scroll animation
        console.log('scroll', element.id)
        this.tl.to(window, { scrollTo: '#' + element.id, duration: 0.4, ease: Power0.easeNone },
          element['dataset'].animatetime);

      } else {

        // slide animation
        if (element['dataset'].animatefrom == "right") {
          this.tl.fromTo(element, { opacity: 0, x: 75 }, { x: 0, duration: 1, opacity: 1 },
            element['dataset'].animatetime);
        }
        else if (element['dataset'].animatefrom == "left") {
          this.tl.fromTo(element, { opacity: 0, x: -75 }, { x: 0, duration: 1, opacity: 1 },
            element['dataset'].animatetime);
        }
        else {
          this.tl.fromTo(element, { opacity: 0, y: 50 }, { y: 0, duration: 1, opacity: 1 },
            element['dataset'].animatetime);
        }
      }
      this.tl.pause();
      // console.log(element, element['dataset'].animatetime);
    });
  }
  // audio
  getAudio() {
    return this.audio;
  }
  setAudio(a) {
    console.log(a);
    this.audio = '';
    this.audio = 'assets/media/' + a;
  }

  setTimeline(t) {
    this.tl.progress(t);
  }

  getTimeline() {
    return this.tl;
  }

  newTimeline() {
    this.tl = new TimelineMax();
    return this.tl;
  }
}
