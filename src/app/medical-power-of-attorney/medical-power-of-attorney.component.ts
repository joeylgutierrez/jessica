import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-medical-power-of-attorney',
  templateUrl: './medical-power-of-attorney.component.html',
  styleUrls: ['./medical-power-of-attorney.component.scss']
})
export class MedicalPowerOfAttorneyComponent implements OnInit {
  selectedMenuItem = 'identity';

  constructor(private router: Router) {
    const currentRouteArr = this.router.url.split('/');
    this.selectedMenuItem = currentRouteArr[currentRouteArr.length -1];
  }

  ngOnInit() {
  }

}
