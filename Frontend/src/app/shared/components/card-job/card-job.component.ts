import { Component, Input } from '@angular/core';
import { Job } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-job.component.html',
  styleUrl: './card-job.component.css'
})
export class CardJobComponent {
  @Input() jobs: Job = {} as Job;

  constructor() { }

  ngOnInit(): void {

  }


}
