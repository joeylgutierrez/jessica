import { Component, OnInit } from '@angular/core';
import {PoaServiceService} from '../poa-service.service';

@Component({
  selector: 'app-contact-info-section',
  templateUrl: './contact-info-section.component.html',
  styleUrls: ['./contact-info-section.component.scss']
})
export class ContactInfoSectionComponent implements OnInit {

  selectedState: State = {id: '', value: 'select one'};
  states: State[];
  selectedDayPhone: string = 'home';
  selectedEveningPhone: string = 'home';
  phoneTypes: string[] = ['home', 'mobile', 'work'];

  constructor(private poaService: PoaServiceService) {

    this.poaService.getStates()
      .subscribe((statesList) => {
        this.states = statesList;
      });
  }

  ngOnInit() {

  }

  changeState(state: State) {
    this.selectedState = state;
  }
}
