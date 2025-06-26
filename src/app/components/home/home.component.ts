import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import CountdownComponent from "../countdown/countdown.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CountdownComponent, FooterComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
