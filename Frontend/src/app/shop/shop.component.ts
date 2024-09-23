import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListJobsComponent } from '../shared/components/list-jobs/list-jobs.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ListJobsComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
