import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traits-section',
  templateUrl: './traits-section.component.html',
  styleUrls: ['./traits-section.component.scss']
})
export class TraitsSectionComponent implements OnInit {
  selectedEyeColor: string = 'blue';
  selectedHairColor: string = 'blonde';
  selectedSkinTone: string = 'white';

  eyeColors: string[] = ['blue', 'brown', 'green'];
  skinTones: string[] = ['white', 'black', 'brown'];
  hairColors: string[] = ['blonde', 'brown', 'black', 'grey'];

  constructor() { }

  ngOnInit() {
  }

}
