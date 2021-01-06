import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {
  
  selectedtab = -1;
  showvideo = false;
  
  constructor(protected sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  items = [
    {
      image: "assets/images/img1.png",
      text: "Decanter",
      pros: `<ul><li>Flexibility in operation, can separate pectin with mother liquor until 35%, at different pH types and 
    pectin structures</li>
    <li>Dry matter 6–10% can  be reached which could improve nitrates washing and pH adjustment</li>
    <li>Separated IPA is clean</li>
    <li> Reduced fouling of heat exchanger, extended CIP* in column</li>
    <li>Reduced pectin losses</li>
    <li>Reliable technology, already proven and tested in Redon pilot plant</li>
    <li>Flottweg shows better performance than Alfa Laval.</li>
    </ul>`,
      cons: `<ul><li>High CAPEX* due to ATEX decanter, one Z6 decanter (12–14 m3/h) ~ 500–550k€</li>
    <li>High maintenance and operational cost. Energy global power for Z6 is 55+15kW = 70kW</li></ul>`,
      link: "https://www.youtube.com/embed/FhS5vN4r5LA"
    },
    {
      image: "assets/images/img2.png",
      text: "Rotary Drum (Screen)",
      pros: `<ul><li>Low CAPEX and operation cost</li>
    <li>Less operational risk because equipment rotates at low speed</li>
    <li>Equipment can be functional if precipitation (1st step) is controlled robustly (correct residence time, temperature, IPA concentration)
</li>
   <li><b>Technology supplier:</b>REKO</li>
   <li><b>Additional/other suppliers:</b>COLUBRIS Cleantech (Redox Water Technology)</li>
    </ul>`,
      cons: `<ul><li>Minimal opening size is 200 microns </li>
    <li>Depending on pectin fiber structure, risk of bleed off fine particles in filtrate IPA</li>
    <li>If IPA in mother liquor is <44%, performance is reduced</li>
    <li>Maintenance and poor mechanical stability (Bad experience in Malchin)</li></ul>`,
      link: "https://www.youtube.com/embed/cVNEM-yZ_kU"
    },
    {
      image: "assets/images/img3.png",
      text: "Belt Drain Separator",
      pros: `<ul><li>Cheaper in comparison with Decanter</li>
    <li>Technology is mainly used for waste-water filtration like Turbo Drain from Bellmer</li>
    <li>Belt Press from Bellmer (competitor)  is used in precipitation area which is not so wide but really long as the draining (separation) is by gravity
</li>
   <li>Technology used in Redon (HM Line) in past, however was not ATEX and homemade constructors, therefore, not operational</li>
   <li>Dry matter is higher (20-30 wt.%) compared to that in Redon
</li>
    </ul>`,
      cons: `<ul>
    <li>Reliability depends on mother liquor, pectin structure and flow distribution</li>
    <li>As the filtration is by gravity or draining, the number of belts to be installed must be high, i.e. 5 or 6 considering the flow/area installed in Redon</li>
    <li>In case of Bellmer, roller press (competitor) large filtration area is required</li>
    <li>Difficult to get blanketed equipment</li>
    </ul>`,
      link: "https://www.youtube.com/embed/26zHzCQt8O8"
    },
    {
      image: "assets/images/img4.png",
      text: "Vaccum Belt Filter",
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
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    const url = 'https://www.youtube.com/embed/' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  tab(n) {
    this.selectedtab = n;
    this.showvideo = true;

  }
  close() {
    this.showvideo = false;

  }

}
