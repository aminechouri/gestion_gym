import { Component } from '@angular/core';
import { GymService } from '../../services/services/gym.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gym-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gym-list.component.html',
  styleUrl: './gym-list.component.css'
})
export class GymListComponent {

  gyms: any[] = [];

  constructor(private gymService: GymService) {}

  ngOnInit(): void {
      this.gymService.getGyms().subscribe((data) => {
          this.gyms = data;
      });
  }
}
