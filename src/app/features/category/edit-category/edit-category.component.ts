import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit,OnDestroy {

  id: string |null = null;
  category!: Category;
 paramsSubscription?:Subscription;
  constructor(private route:ActivatedRoute, private categoryService:CategoryService ){}

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
 this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params)=>{
        this.id = params.get('editId');
        if(this.id){
          //get the data from the API for this category ID
          this.categoryService.getCategoriesById(this.id)
          .subscribe({
            next: (response) => {
                this.category = response;
                console.log("sa",this.category)
            }
          })
        }

      }
    })
  }

  onFormSubmit():void{
    console.log(this.category);
  }

}
