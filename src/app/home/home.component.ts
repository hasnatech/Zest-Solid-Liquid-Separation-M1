import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
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
  items = [
    {
      image: "assets/images/decanter.png",
      videoimge: "assets/images/decanter_play.png",
      text: "Decanter",
      defn: `A decanter separates solids from one or two liquid phases in one single continuous process. This is done using centrifugal forces that can be well
beyond 3000 times greater than gravity.`,
      pros: `<ul><li>Flexibility in operation, can separate pectin with mother liquor until 35%, at different pH types and 
    pectin structures</li>
    <li>Dry matter 6–10% can  be reached which could improve nitrates washing and pH adjustment</li>
    <li>Separated IPA is clean</li>
    <li> Reduced fouling of heat exchanger, extended CIP<span class='red'>*</span> in column</li>
    <li>Reduced pectin losses</li>
    <li>Reliable technology, already proven and tested in Redon pilot plant</li>
    <li>Flottweg shows better performance than Alfa Laval</li>
    </ul>
    <p class='red'>*Clean In Place</p>`,
      cons: `<ul><li>High CAPEX<span class='red'>*</span> due to ATEX decanter, one Z6 decanter (12–14 m<sup>3</sup>/h) ~ 500–550k€</li>
    <li>High maintenance and operational cost. Energy global power for Z6 is 55+15kW = 70kW</li></ul>
    <p class='red'>*Capital Expenditure</p>`,
      link: "https://www.youtube.com/embed/FhS5vN4r5LA"
    },
    {
      image: "assets/images/rotary_drum.png",
      videoimge: "assets/images/rotary_drum_play.png",
      text: "Rotary Drum (Screen)",
      defn: `A rotary drum separates solids from the liquid with a good separation efficiency against low running and maintenance costs. The drum sieve allows the liquid to pass however solids are retained and carried out in a rotating movement.`,
      pros: `<ul><li>Low CAPEX and operation cost</li>
    <li>Less operational risk because equipment rotates at low speed</li>
    <li>Equipment can be functional if precipitation (1st step) is controlled robustly (correct residence time, temperature, IPA concentration)
</li>
</ul>
<div class='blue'>
   <p><b>Technology supplier:</b> REKO</p>
   <p><b>Additional/other suppliers:</b> COLUBRIS Cleantech (Redox Water Technology)</p>
   </div>
    `,
      cons: `<ul><li>Minimal opening size is 200 microns </li>
    <li>Depending on pectin fiber structure, risk of bleed off fine particles in filtrate IPA</li>
    <li>If IPA in mother liquor is <44%, performance is reduced</li>
    <li>Maintenance and poor mechanical stability (Bad experience in Malchin)</li></ul>`,
      link: "https://www.youtube.com/embed/cVNEM-yZ_kU"
    },
    {
      image: "assets/images/Belt-thickener.png",
      videoimge: "assets/images/belt-thickener_play.png",
      text: "Belt Drain Separator",
      defn: `A belt drain separator is an industrial machine, used for solid/liquid separation processes, particularly the dewatering of sludges in the chemical industry, mining and water treatment. `,
      pros: `<ul><li>Cheaper in comparison with Decanter</li>
    <li>Technology is mainly used for waste-water filtration like Turbo Drain from Bellmer</li>
    <li>Belt Press from Bellmer (competitor)  is used in precipitation area which is not so wide but really long as the draining <span class='whitespace'>(separation) is by gravity</span>
</li>
   <li>Technology used in Redon (HM Line) in past, however was not ATEX and homemade constructors, therefore, not operational</li>
   <li>Dry matter is higher (20-30 wt.%) compared to that in Redon
</li>
    </ul>`,
      cons: `<ul>
    <li>Reliability depends on mother liquor, pectin structure and flow distribution</li>
    <li>As the filtration is by gravity or draining, the number of belts to be installed must be high, i.e. 5 or 6 considering the flow/area <span class='whitespace'>installed in Redon</span></li>
    <li>In case of Bellmer, roller press (competitor) large filtration area is required</li>
    <li>Difficult to get blanketed equipment</li>
    </ul>`,
      link: "https://www.youtube.com/embed/26zHzCQt8O8"
    },
    {
      image: "assets/images/vaccum_belt.png",
      videoimge: "assets/images/vaccum_belt_play.png",
      text: "Vaccum Belt Filter",
      defn: `A vacuum belt filter is used for the filtration of liquids and dewatering of sludges. Vacuum is pulled to remove the liquid through a continuously moving filter cloth. There is also a possibility to have multiple wash steps along the length of the filter.`,
      pros: `<ul>
    <li>Good quality in filtrate</li>
    <li>Dry matter of 10–13% is possible</li>
    </ul>`,
      cons: `<ul>
    <li>High operation cost (N2, power)</li>
    <li>High CAPEX and maintenance cost  in comparison with Decanters</li>
    <li>High footprint</li>
    </ul>`,
      link: "https://www.youtube.com/embed/6voXE1HxYsY"
    }
  ]

  updateVideoUrl(id: string) {
    const url = 'https://www.youtube.com/embed/' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  tab(n) {
    this.selectedtab = n;
    this.selectedItem = 1;
    this.showvideo = true;
    this.para = true;
    this.hidden = true;
    this.shown = false
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
}
