import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack-disk-centrifuge',
  templateUrl: './stack-disk-centrifuge.component.html',
  styleUrls: ['./stack-disk-centrifuge.component.scss']
})
export class StackDiskCentrifugeComponent implements OnInit {

  constructor() { }

  stackdisk = [
    {
      interctivity: `<p>The product to be clarified enters the interior of the bowl through a stationary inlet pipe.</p>`,
      selected: false
    },
    { interctivity: `<p>Gently accelerated by the distributor to the bowl speed.</p>`, selected: false },
    { interctivity: `<p>The disk stack in the bowl causes the product stream to be divided up into many thin layers, creating a large clarifying area. The solids are separated from the liquid within the disk stack.</p>`, selected: false },
    { interctivity: `<p>The high centrifugal force separates the solids and collected in the solids chamber of the bowl. </p>`, selected: false },
    { interctivity: `<p>A hydraulic system operates the sliding piston. </p>`, selected: false },
    { interctivity: `<p>Periodically ejects the separated solids at full speed of rotation via a solids cyclone (optional). </p>`, selected: false },
    { interctivity: `<p>The clarified liquid flows out of the disk pack to a centripetal pump which discharges the liquid under pressure. </p>`, selected: false },
    { interctivity: `<p>Outlet of the clarified liquid. </p>`, },
  ]

  ngOnInit(): void {
  }

  selectedIndex;

  gotoItem(i) {
    this.stackdisk[i].selected = true;
    this.selectedIndex = i;
  }
}
