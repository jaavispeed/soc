import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import CountdownComponent from "../countdown/countdown.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CountdownComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
