import { Component } from '@angular/core';
import { NavbarComponent } from "../components/partials/navbar/navbar.component";
import { FooterComponent } from "../components/partials/footer/footer.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
