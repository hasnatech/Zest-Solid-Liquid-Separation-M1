import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';
@Component({
  selector: 'app-stack-disk-centrifuge',
  templateUrl: './stack-disk-centrifuge.component.html',
  styleUrls: ['./stack-disk-centrifuge.component.scss']
})
export class StackDiskCentrifugeComponent implements AfterViewInit {
  
  constructor(private service : MainService) { }

  stackdisk = [
    { interctivity: `<p>The product to be clarified enters the interior of the bowl through a stationary inlet pipe.</p>`, selected: false, audio: "sdc_1.mp3"},
    { interctivity: `<p>The product is gently accelerated by the distributor to the bowl speed</p>`, selected: false, audio: "sdc_2.mp3" },
    { interctivity: `<p>The disk stack in the bowl causes the product stream to be divided up into many thin layers, creating a large clarifying area. The solids are separated from the liquid within the disk stack.</p>`, selected: false, audio: "sdc_3.mp3" },
    { interctivity: `<p>The high centrifugal force separates the solids and collected in the solids chamber of the bowl. </p>`, selected: false, audio: "sdc_4.mp3" },
    { interctivity: `<p>A hydraulic system operates the sliding piston. </p>`, selected: false, audio: "sdc_5.mp3" },
    { interctivity: `<p>Periodically ejects the separated solids at full speed of rotation via a solids cyclone (optional). </p>`, selected: false, audio: "sdc_6.mp3" },
    { interctivity: `<p>The clarified liquid flows out of the disk pack to a centripetal pump which discharges the liquid under pressure. </p>`, selected: false, audio: "sdc_7.mp3" },
    { interctivity: `<p>Outlet of the clarified liquid. </p>`, selected: false, audio: "sdc_8.mp3" },
  ]

  ngAfterViewInit(): void {
    this.service.animate();
    this.service.setAudio('');
  }

  selectedIndex;

  gotoItem(i) {
    this.stackdisk[i].selected = true;
    this.selectedIndex = i;
    this.service.setAudio('');
    setTimeout(() => {

      this.service.setAudio(this.stackdisk[i].audio);
    }, 50);
  }
}
