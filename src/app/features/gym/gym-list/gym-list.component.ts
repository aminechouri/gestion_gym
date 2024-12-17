import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymService } from '../../services/services/gym.service';

@Component({
  selector: 'app-gym-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gym-list.component.html',
  styleUrl: './gym-list.component.css'
})
export class GymListComponent {

  gyms: any[] = []; // List to hold gym data

  constructor(private gymService: GymService) {}

  ngOnInit(): void {
    this.loadGyms();
  }

  loadGyms() {
    this.gymService.getGyms().subscribe({
      next: (data) => {
        this.gyms = data;
        console.log('Gyms loaded:', data);
      },
      error: (error) => {
        console.error('Error fetching gyms:', error);
      },
    });
  }
}
