import { Component, Input, OnInit } from '@angular/core';
import { CarouselDetails, CarouselHome } from '../../models';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-carousel-items',
  standalone: true,
  imports: [CommonModule, NgbModule, NgbCarouselModule],
  templateUrl: './carousel-items.component.html',
  styleUrl: './carousel-items.component.css'
})
export class CarouselItemsComponent implements OnInit {

  @Input() categories!: CarouselHome[];
  @Input() products_details!: CarouselDetails[];
  @Input() page!: String;

  selectIndex = 0;
  selectIndex_product_img = 0;

  constructor() { }

  ngOnInit(): void {
    console.log('CarouselItemsComponent initialized with categories:', this.categories);
    console.log('CarouselItemsComponent initialized with products_details:', this.products_details);
    console.log('CarouselItemsComponent initialized with page:', this.page);
  }
}
