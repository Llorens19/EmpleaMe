import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Job } from '../../core/models/job.model';

@Component({
  selector: 'app-card-job',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-job.component.html',
  styleUrl: './card-job.component.css'
})
export class CardJobComponent {
  // espera un objeto con una único trabajo
  @Input() jobs: Job = {} as Job;

  constructor() { }
}
