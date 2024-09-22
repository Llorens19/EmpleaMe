import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category.service'
import { Category } from '../../core/models/category.model';
import { CardCategoryComponent } from '../card-category/card-category.component';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [CardCategoryComponent],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListCategoriesComponent implements OnInit {

  // Declaraciones
  // espera un array con varias categorias. Se inicializa como array vacio
  categories: Category[] = [];

  constructor(private CategoryService: CategoryService) { }

  //Inicia solo una vez durante el ciclo de vida del componente
  ngOnInit(): void {
    this.allCategories();
  }

  //Find all categories
  allCategories(): void {
    this.CategoryService.all_categories().subscribe(
      (data: any) => {
        this.categories = data.categories;
        console.log(data.categories);      
      }
    );
  }
}
