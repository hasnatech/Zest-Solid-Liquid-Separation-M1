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
  constructor(protected sanitizer: DomSanitizer) { }

  ngOnInit(): void {

  }
  items = [{
    image: "assets/images/Card1.png",
    videoimge: "assets/images/decanter_play.png",
    text: "Centrifugal separation",
    text1: "Basics of Centrifugal separation",
    defn: `Centrifugal force is used to induce separation.`,
    pros: `<ul><li>Flexibility in operation, can separate pectin with mother liquor until 35%, at different pH types and
    pectin structures</li>
    <li>Dry matter 6–10% can  be reached which could improve nitrates washing and pH adjustment</li>
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
  }
  close() {
    this.showvideo = false;
    //this.hidden = false;
    this.playVideo = false;
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


}
