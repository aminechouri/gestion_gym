import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GymListComponent } from "./features/gym/gym-list/gym-list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GymListComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
