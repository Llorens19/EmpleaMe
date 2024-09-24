import { Component } from '@angular/core';
import { CarouselDetails, CarouselHome } from '../core/models/carousel.model';
import { CarouselComponent,ListCategoriesComponent } from '../shared';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListCategoriesComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {
    console.log('HomeComponent constructor');
  }


}