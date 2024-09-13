import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/partials/navbar/navbar.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import 'aos/dist/aos.css';

// Initialize AOS
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '4_sell';
}
