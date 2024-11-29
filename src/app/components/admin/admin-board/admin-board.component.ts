import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-board',
  standalone: true,
  imports: [SidebarComponent,RouterOutlet],
  templateUrl: './admin-board.component.html',
  styleUrl: './admin-board.component.css'
})
export class AdminBoardComponent {

}
