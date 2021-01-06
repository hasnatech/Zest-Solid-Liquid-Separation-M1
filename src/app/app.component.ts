import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solid-separation-tech';

  @HostListener('document:contextmenu', ['$event'])
  onRightClick($event) {
    $event.preventDefault();
  }

  constructor() {
    const script1 = document.createElement('script');
    script1.src = '//assets.adobedtm.com/47e3e446470b/b72afcffdbd7/launch-a14b516e7cd5.min.js';
    document.head.appendChild(script1);
  }
}
