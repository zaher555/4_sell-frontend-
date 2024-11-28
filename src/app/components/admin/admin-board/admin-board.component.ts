import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-admin-board',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './admin-board.component.html',
  styleUrl: './admin-board.component.css'
})
export class AdminBoardComponent {

}
