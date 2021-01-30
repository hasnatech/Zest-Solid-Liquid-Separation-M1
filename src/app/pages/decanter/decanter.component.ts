import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-decanter',
  templateUrl: './decanter.component.html',
  styleUrls: ['./decanter.component.scss']
})
export class DecanterComponent implements OnInit {
  selectedItem = 1;
  selectedtab = -1;
  showvideo = false;
  hidden = true;
  shown = false;
  disabled = false;
  para = true;
  playVideo = false;
  selecteddesc = 0;
  selectedprocess = true
  selectedprocess1 = false
  image1 = false
  image2 = false
  image3 = false;
  buttonchange = false;
  header = true;
  scrollObject: any;
  idCount: any;
  constructor() { }
  ngOnInit(): void {

  }
  decanterdata = [
    {
      title: `Bowl`,
      desc: ` The bowl has a cylindrical/conical shape and rotates at a pre-set speed optimally adjusted to the application. The slurry rotates with 
      the bowl at the operating speed and forms a concentric layer at the bowl wall. The solids contained in the product are 
      packed against the bowl wall by centrifugal force. The length of the cylindrical bowl section and the cone angle are selected to 
      meet the specific requirements of an application.`,
      selected: false
    },
    {
      title: `Scroll`,
      desc: `The scroll rotates at a slightly different speed than the bowl and conveys the separated solids toward the conical end of the bowl. This differential 
      speed determines the residence time of the solids in the bowl. Residence time is a critical factor for cake dryness. 
      It can be adjusted by changing the differential speed of the scroll thus providing optimal separation. The scroll design depends on the application and the separation task.`,
      selected: false
    },
    {
      title: `Solids Discharge`,
      desc: `Settled solids are ejected through ports at the conical end of the bowl into the solids housing and fall through the discharge chute.`,
      selected: false
    },
    {
      title: `Feed`,
      desc: `The product is fed through a stationary pipe into the feed zone located in the center of the scroll. The product is then accelerated circumferentially and 
      delivered through distribution ports into the bowl.`,
      selected: false
    },
    {
      title: `Overflow Weirs`,
      desc: `The clarified liquids flow to the cylindrical end of the bowl where they exit over weir plates. Easily adjustable weir plates allow for precise 
      adjustment of the pond depth in the bowl. The liquid overflow is then collected in a centrate chamber and discharged by gravity.`,
      selected: false
    },
    {
      title: `Adjustable Impeller`,
      desc: `The clarified liquid can also be decanted with an impeller and discharged from the bowl under pressure. This eliminates the need for a separate chamber 
      pump. The adjustable impeller is an engineering refinement that permits quick and precise adjustment of the pond depth during operation to accommodate for changing 
      process conditions.`,
      selected: false
    },
    {
      title: `Materials`,
      desc: `High-quality stainless steel is used for all product-wetted areas. The bowl and scroll body are made of high-strength centrifugal Duplex stainless steel casting.`,
      selected: false
    },

  ]


  title(n) {
    this.decanterdata[n].selected = true;
    this.selecteddesc = n;
  }

  process() {
    this.selectedprocess = true
    this.selectedprocess1 = false
  }
  decanter() {
    this.selectedprocess1 = true;
    this.selectedprocess = false

  }
  scroll() {
    document.querySelector('#target').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  selectedTab = 1;

  tab(n) {
    this.selectedTab = n;

  }
}
