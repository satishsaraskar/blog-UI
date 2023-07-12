import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRquest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {

  private addcategorysubscribtion?: Subscription
  model : AddCategoryRquest;
  constructor(private categoryService:CategoryService , private router : Router){
    this.model ={
      name:'',
      urlHandle:''
    }
  }


  onFormSubmit(){
    this.addcategorysubscribtion = this.categoryService.addCategory(this.model)
    .subscribe({
      next:(response) =>{
        console.log("this was successfull")
        this.router.navigateByUrl('/admin/categories')

      },
      error:(error) => {
        console.log('erorr');
      }
    })

  }

  ngOnDestroy(): void {
    this.addcategorysubscribtion?.unsubscribe()
  }

}
// function unsubscribe() {
//   throw new Error('Function not implemented.');
// }

