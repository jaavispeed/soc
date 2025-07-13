import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { CountdownComponent } from '../../components/countdown/countdown.component';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  imports: [NavbarComponent, CountdownComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
})
export default class LandingPageComponent {}
