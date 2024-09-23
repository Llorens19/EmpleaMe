import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services';
import { Category } from '../../../shared/models';
import { CardCategoryComponent } from '../card-category/card-category.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [CardCategoryComponent, CommonModule],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListCategoriesComponent implements OnInit {

  offset = 0;
  limit = 4;
  categories: Category[] = [];

  constructor(private CategoryService: CategoryService) { }

  //INICIA 

  ngOnInit(): void {
    this.getCategories();
  }

  // Cargamosa las categorias
  getCategories() {
    const params = this.getRequestParams(this.offset, this.limit);

    this.CategoryService.all_categories(params).subscribe(
      (data: any) => {
        this.categories = data.categories;
      }
    );
  }



  getRequestParams(offset: number, limit: number): any {
    let params: any = {};

    params[`offset`] = offset;
    params[`limit`] = limit;

    return params;
  }

  scroll() {
    this.getCategories();
  }
}
