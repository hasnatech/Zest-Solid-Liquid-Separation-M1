import { ThrowStmt } from '@angular/compiler';
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeStyle,
  SafeScript,
  SafeUrl,
  SafeResourceUrl
} from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  selectedItem = 1;
  selectedtab = -1;
  showvideo = false;
  hidden = true;
  shown = false;
  disabled = false;
  para = true;
  playVideo = false;
  selecteddesc = 0;
  selectedprocess = false
  selectedprocess1 = false
  image1 = false
  image2 = false
  image3 = false;
  buttonchange = false;
  header = true;
  constructor(protected sanitizer: DomSanitizer) { }

  ngOnInit(): void {

  }
  items = [{
    image: "assets/images/Card1.png",
    videoimge: "assets/images/decanter_play.png",
    text: "Centrifugal separation",
    text1: "Working principle of decanter centrifuge",
    defn: `Centrifugal force is used to induce separation.`,
    pros: `<ul><li>In case of solid-liquid slurry, solid particles experience a force, pushed towards the wall and get collected.</li>
    <li>In case of liquid-liquid system, heavier liquid having higher density are pushed towards the wall and get collected.</li>
    </ul>`,
    cons: `<ul><li>In case of liquid-liquid system, heavier liquid having higher density are pushed towards the wall and get collected./li>
      </ul>
    <p class='red'>*Capital Expenditure</p>`,
    link: "https://www.youtube.com/embed/FhS5vN4r5LA"
  },
  {
    image: "assets/images/Card2.png",
    text: "Decanter Centrifuge",
    text1: "Working principle of decanter centrifuge",
    pros: `<ul><li>Uses centrifugal forces that can be well beyond 3000 times greater than gravity.</li>
    <li>DSolid particles are pressed outwards against the rotating bowl wall, while the less dense liquid phase forms a concentric inner layer.</li>
    <li>The sediment formed by the solids is continuously removed by the screw conveyor, which rotates at a different speed than the bowl.</li>
    <li>As a result, the solids are gradually “ploughed” out and removed from the conical part.</li>
    </ul>`,
  },
  {
    image: "assets/images/Card3.png",
    text: "Stack Disk Centrifuge",
    text1: "Working principle of stack disk centrifuge",
  },
  ]

  button = [
    {
      btn1: ` <div class="button1"> Scroll </div>
    <div class="button2"> Bowl </div>
    <div class="button3"> Solids <br>Discharge </div>`,
      btn2:
        `<div class="button4"> Feed </div>
    <div class="button5"> Adjustable Impeller </div>
    <div class="button6"> Materials</div>
    <div class="button7"> Overflow</div>`,
      title: ` <p> Screw </p> `,
      description: `<p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p> `,
    },
  ]

  decanterdata = [
    {
      title: `Bowl`,
      desc: ` The bowl has a cylindrical/ conical shape and rotates at a pre - set
speed optimally adjusted to the application.The slurry rotates
with the bowl at the operating speed and forms a concentric
layer at the bowl wall.The solids contained in the product are
packed against the bowl wall by centrifugal force.The length of
the cylindrical bowl section and the cone angle are selected to
meet the speciﬁc requirements of an application.`,
      selected: false
    },
    {
      title: `Scroll`,
      desc: `The scroll rotates at a slightly different speed than the bowl and
conveys the separated solids toward the conical end of the bowl.
This differential speed determines the residence time of the solids in the bowl. Residence time is a critical factor for cake dryness. It can be adjusted by changing the differential speed ofthe
scroll thus providing optimal separation. The scroll design depends on the application and the separation task.

`,
      selected: false
    },
    {
      title: `Solids Discharge`,
      desc: `Settled solids are ejected through ports at
the conical end of the bowl into the solids
housing and fall through the discharge
chute.`,
selected: false
    },
    {
      title: `Feed`,
      desc: `The product is fed through a stationary pipe into the
feed zone located in the center of the scroll. The product is then accelerated circumferentially and delivered through distribution ports into the bowl.`,
selected: false    
},
    {
      title: `Adjustable Impeller`,
      desc: `The clarified liquid can also be decanted with an impeller and discharged from the bowl under pressure.
This eliminates the need for a separate chamber
pump. The Flottweg Adjustable Impeller is an engineering refinement that permits quick and precise
adjustment of the pond depth during operation to
accommodate for changing process conditions.`,
      selected: false
    },
    {
      title: `Materials`,
      desc: `Flottweg uses high-quality stainless steel for all
product-wetted areas. The bowl and scroll body are
made of high-strength centrifugal Duplex stainless
steel casting.`,
      selected: false
    },
    {
      title: `Overflow Weirs`,
      desc: `The clarified liquids flow to the cylindrical end of the
bowl where they exit over weir plates. Easily adjustable
weir plates allow for precise adjustment of the pond
depth in the bowl. The liquid overflow is then collected in a centrate chamber and discharged by gravity.`,
      selected: false
    }

  ]

  updateVideoUrl(id: string) {
    const url = 'https://www.youtube.com/embed/' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  tab(n) {
    this.selectedtab = n;
    this.selectedItem = -1;
    this.showvideo = true;
    this.para = false;
    this.hidden = false;
    this.shown = true
    this.header = false
  }
  close() {
    this.showvideo = false;
    //this.hidden = false;
    this.playVideo = false;
      this.header = true
  }
  hide() {
    this.selectedItem = -1;
    this.shown = true;
    this.hidden = false;
    this.para = false;


  }
  show() {
    if (this.selectedItem === -1) {
      this.selectedItem = 1;
    }
    this.shown = false;
    this.hidden = true;
    this.para = true;

  }

  selectedTab;
  gotoTab(i) {
    this.selectedTab = this.items[i];
  }

  title(n) {
    this.decanterdata[n].selected = true;
    this.selecteddesc = n;



  }

}
