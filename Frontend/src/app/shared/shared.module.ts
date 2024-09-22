import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCategoriesComponent } from '../shared/list-categories/list-categories.component';
import { CardCategoryComponent } from '../shared/card-category/card-category.component';

import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { CardJobComponent } from './card-job/card-job.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListCategoriesComponent,
    CardCategoryComponent,
    ListJobsComponent,
    CardJobComponent
  ],
  exports: [
    ListCategoriesComponent,
    CardCategoryComponent,
    ListJobsComponent,
    CardJobComponent
  ]
})
export class SharedModule { }
