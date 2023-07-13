import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCategoryRquest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }


  addCategory(model : AddCategoryRquest):Observable<void>{
    return this.http.post<void>(`${environment.apiUrl}/api/categories/`,model);
  }

  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.apiUrl}/api/categories/`);
  }

  getCategoriesById(id:string):Observable<Category>{
    return this.http.get<Category>(`${environment.apiUrl}/api/categories/${id}`)
  }

}
