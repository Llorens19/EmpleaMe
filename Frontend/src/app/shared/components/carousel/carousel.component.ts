import { Component, OnInit, Input } from '@angular/core';
import { CarouselDetails, CarouselHome } from '../../models';
import { Category } from '../../models';
import { CarouselService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../services/job.service';
import { CarouselItemsComponent } from '../carousel-items/carousel-items.component';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselItemsComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent implements OnInit {

  items_carousel!: CarouselHome[];
  items_details!: CarouselDetails[];
  slug_details!: string | null;
  page!: String;

  constructor(private CarouselService: CarouselService, private jobService: JobService, private ActivatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.slug_details = this.ActivatedRoute.snapshot.paramMap.get('slug');
    this.carousel_categories();
    this.carousel_shop_details();
  }

  carousel_categories(): void {
    this.page = "categories";
    this.CarouselService.getCarouselHome().subscribe(((data: any) => {
      console.log(data);
      this.items_carousel = data.categories;
    }))
  }
  carousel_shop_details(): void {
    if (this.slug_details) {
      this.page = "details";
      this.CarouselService.getCarouselDetails(this.slug_details).subscribe(((data: any) => {
        // console.log(data);
        this.items_details = data.products.images;
        // console.log(this.items_details);
      }))
    }
  }
}
