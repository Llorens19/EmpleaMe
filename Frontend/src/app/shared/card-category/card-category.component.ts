import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../../core/models/category.model';

@Component({
  selector: 'app-card-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.css'
})
export class CardCategoryComponent {
  // espera un objeto con una única categoria
  @Input() categories: Category = {} as Category;

  constructor() { }

  // categories = input.required<Category>();
}
