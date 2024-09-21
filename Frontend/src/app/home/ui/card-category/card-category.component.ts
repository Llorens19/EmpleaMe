import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../../shared/models';

@Component({
  selector: 'app-card-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.css'
})
export class CardCategoryComponent {
  @Input() categories: Category = {} as Category;

  constructor() { }

  ngOnInit(): void {
  }
}