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
  imports: [CarouselItemsComponent, CarouselItemsComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent {
  currentSlide = 0;
  totalSlides = 3;  // Número total de slides

  // Cambiar a la siguiente slide
  next() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateCarousel();
  }

  // Cambiar a la slide anterior
  prev() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateCarousel();
  }

  // Actualizar la posición del carrusel
  updateCarousel() {
    const carousel = document.getElementById('carousel-items');
    if (carousel) {
      carousel.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }
  }
}