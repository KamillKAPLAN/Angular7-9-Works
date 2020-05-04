import {Component, OnInit} from '@angular/core';
import {CategoryModel} from './category.model';
import {CategoryService} from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) {
  }

  categories: CategoryModel[];
  selectedCategory: CategoryModel;

  getCategories() {
    this.categoryService.getCategories()
      .subscribe(
        c => this.categories = c
      );
  }

  ngOnInit() {
    this.getCategories();
  }

  onSelect(category?: CategoryModel) {
    if (category) {
      this.selectedCategory = category;
    } else {
      this.selectedCategory = null;
    }
  }

}
