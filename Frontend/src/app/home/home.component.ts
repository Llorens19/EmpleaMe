import { Component } from '@angular/core';
import { CarouselDetails, CarouselHome } from '../shared/models/carousel.model';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';
import { ListCategoriesComponent } from './ui/list-categories/list-categories.component';
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