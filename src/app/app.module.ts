import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'bootstrap';
import { AppComponent } from './app.component';
import { MedicalPowerOfAttorneyComponent } from './medical-power-of-attorney/medical-power-of-attorney.component';
import { PersonalInfoSectionComponent } from './personal-info-section/personal-info-section.component';
import {AppRoutingModule} from './app-routing.module';
import {PoaServiceService} from './poa-service.service';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { TraitsSectionComponent } from './traits-section/traits-section.component';
import { ContactInfoSectionComponent } from './contact-info-section/contact-info-section.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicalPowerOfAttorneyComponent,
    PersonalInfoSectionComponent,
    NavbarComponent,
    TraitsSectionComponent,
    ContactInfoSectionComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [
    PoaServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
