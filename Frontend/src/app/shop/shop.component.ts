import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListJobsComponent } from '../shared';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ListJobsComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
