import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

// categories? : Category[];
//using async pipe
categories$?:Observable<Category[]>;
constructor( private categoryService:CategoryService,
  private router : Router){}

  ngOnInit(): void {
  this.categories$ = this.categoryService.getAllCategories()
  // this.categoryService.getAllCategories()
  // .subscribe({
  //   next:(response) =>{
  //     console.log(response);
  //     this.categories = response
  //   }
  // })
  }


  // onDeleteCategory(ss:any){
  //   console.log(ss);

  //     this.categoryService.deleteCategory(ss)
  //     .subscribe({
  //       next:(response) =>{
  //         this.router.navigateByUrl('/admin/categories')
  //       }
  //     })
  // }
}
