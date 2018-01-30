import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {MedicalPowerOfAttorneyComponent} from './medical-power-of-attorney/medical-power-of-attorney.component';
import {PersonalInfoSectionComponent} from './personal-info-section/personal-info-section.component';
import {TraitsSectionComponent} from './traits-section/traits-section.component';
import {ContactInfoSectionComponent} from './contact-info-section/contact-info-section.component';
import {LandingComponent} from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  },
  {
    path: 'overview',
    component: LandingComponent,
  },
  {
    path: 'poa',
    component: MedicalPowerOfAttorneyComponent,
    children: [
      {
        path: '',
        redirectTo: 'identity',
        pathMatch: 'full'
      },
      {
        path: 'identity',
        component: PersonalInfoSectionComponent
      },
      {
        path: 'contact-info',
        component: ContactInfoSectionComponent
      },
      {
        path: 'traits',
        component: TraitsSectionComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
