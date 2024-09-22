import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

const URL = 'http://localhost:3000/categories';
// const URL_select = 'http://127.0.0.1:3000/categories_select_filter';

// 'root' indica que este servicio será singleton en toda la aplicación
@Injectable({
  providedIn: 'root' 
})

export class CategoryService {
  constructor(private http: HttpClient) { }

  all_categories(): Observable<Category[]> {
    return this.http.get<Category[]>(URL);
  }

  // all_categories_select(): Observable<Category[]> {
  //   return this.http.get<Category[]>(URL_select)
  // }

  // get_category(id: String): Observable<Category> {
  //   return this.http.get<Category>(`${URL}/${id}`);
  // }

  // create_category(category: Category): Observable<Category[]> {
  //   return this.http.post<Category[]>(URL, category);
  // }

  // delete_category(id: String): Observable<Category[]> {
  //   return this.http.delete<Category[]>(`${URL}/${id}`);
  // }
  
  // delete_all_categories(): Observable<Category[]> {
  //   return this.http.delete<Category[]>(`${URL}`);
  // }
}

// export type { Category };
