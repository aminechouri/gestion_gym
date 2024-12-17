import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GymService } from '../../services/services/gym.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gym-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gym-add.component.html',
  styleUrl: './gym-add.component.css'
})
export class GymAddComponent {

  gym = {
    name: '',
    location: '',
    contactNumber: '',
    description: '',
  };

  constructor(private gymService: GymService, private toastr: ToastrService) {}

  addGym() {
    this.gymService.addGym(this.gym).subscribe({
      next: (response) => {
        this.toastr.success('Gym added successfully!', 'Success');
        this.gym = { name: '', location: '', contactNumber: '', description: '' };
      },
      error: (error) => {
        this.toastr.error('Failed to add gym. Please try again.', 'Error');
      },
    });
  }

}
