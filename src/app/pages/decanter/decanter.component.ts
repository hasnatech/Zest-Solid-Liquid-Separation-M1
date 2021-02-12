import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';
@Component({
  selector: 'app-decanter',
  templateUrl: './decanter.component.html',
  styleUrls: ['./decanter.component.scss']
})
export class DecanterComponent implements AfterViewInit {
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
  private audio: string;
  constructor(public service : MainService) { }
  ngAfterViewInit(): void {
    this.service.animate();
  
    this.service.setAudio('01_newone.mp3');
  }
  decanterdata = [
    {
      title: `Bowl`,
      desc: ` The bowl has a cylindrical/conical shape and rotates at a pre-set speed optimally adjusted to the application. The slurry rotates with 
      the bowl at the operating speed and forms a concentric layer at the bowl wall. The solids contained in the product are 
      packed against the bowl wall by centrifugal force. The length of the cylindrical bowl section and the cone angle are selected to 
      meet the specific requirements of an application.`,
      selected: false,
      audio: "bowl.mp3"
    },
    {
      title: `Scroll`,
      desc: `The scroll rotates at a slightly different speed than the bowl and conveys the separated solids toward the conical end of the bowl. This differential 
      speed determines the residence time of the solids in the bowl. Residence time is a critical factor for cake dryness. 
      It can be adjusted by changing the differential speed of the scroll thus providing optimal separation. The scroll design depends on the application and the separation task.`,
      selected: false,
      audio: "scroll.mp3"
    },
    {
      title: `Solids Discharge`,
      desc: `Settled solids are ejected through ports at the conical end of the bowl into the solids housing and fall through the discharge chute.`,
      selected: false,
      audio: "solids.mp3"
    },
    {
      title: `Feed`,
      desc: `The product is fed through a stationary pipe into the feed zone located in the center of the scroll. The product is then accelerated circumferentially and 
      delivered through distribution ports into the bowl.`,
      selected: false,
      audio: "feed.mp3"
    },
    {
      title: `Overflow Weirs`,
      desc: `The clarified liquids flow to the cylindrical end of the bowl where they exit over weir plates. Easily adjustable weir plates allow for precise 
      adjustment of the pond depth in the bowl. The liquid overflow is then collected in a centrate chamber and discharged by gravity.`,
      selected: false,
      audio: "over.mp3"
    },
    {
      title: `Adjustable Impeller`,
      desc: `The clarified liquid can also be decanted with an impeller and discharged from the bowl under pressure. This eliminates the need for a separate chamber 
      pump. The adjustable impeller is an engineering refinement that permits quick and precise adjustment of the pond depth during operation to accommodate for changing 
      process conditions.`,
      selected: false,
      audio: "adjust.mp3"
    },
    {
      title: `Materials`,
      desc: `High-quality stainless steel is used for all product-wetted areas. The bowl and scroll body are made of high-strength centrifugal Duplex stainless steel casting.`,
      selected: false,
      audio: "materials.mp3"
    },

  ]


  title(n) {
    this.decanterdata[n].selected = true;
    this.selecteddesc = n;   
    this.service.setAudio('');
    setTimeout(() => {

      this.service.setAudio(this.decanterdata[n].audio);
    }, 50);
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
  audioArr = [
    "",
    "",
    "process_pm.mp3",
    "decanter_pm.mp3"
  ];
  tab(n) {
    this.service.animate('step2');
    this.selectedTab = n; 
    this.service.setAudio(this.audioArr[this.selectedTab])
    this.image1 = false
    this.image2 = false
    this.image3 = false
   
  }
show1(){
 
  this.image1 = true
  this.service.setAudio('feedrate.mp3')
 
}
  show2() {
    this.image2 = true 
    this.service.setAudio('partical_size.mp3')
  }
  show3() {
    this.image3 = true
    this.service.setAudio('viscosity.mp3')
    
  }
hide(){
  this.service.setAudio('');
     this.selectedTab = 1
   
} 

 
  getAudio() {
    return this.audio;
  }
  setAudio(a) {
    console.log(a);
    this.audio = '';
    this.audio = 'assets/media/' + a;
  }

}
