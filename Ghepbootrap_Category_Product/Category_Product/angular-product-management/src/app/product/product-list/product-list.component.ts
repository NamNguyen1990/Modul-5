import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productForm = new FormGroup({
    name: new FormControl(),
    categoryId: new FormControl()
  });

  list: any;
  listCategory: Category[] = [];

  constructor(private httpClient: HttpClient,
              private productService: ProductService,
              private router:Router,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.productService.findAll().subscribe((data)=> {
      console.log(data)
      this.list = data;

    }, error => {
    })
    this.categoryService.findAll().subscribe((data)=> {
      console.log(data)
      this.listCategory = data;
    }, error => {
    })
  }

  searchByCategoryId(id : any) {
    // const id = this.productForm.value.categoryId;
    this.productService.findCategoryId(id).subscribe(data => {
      this.list= data;
      console.log(data);
    });
  }

  findByName() {
    const name = this.productForm.value.name
    this.productService.findByName(name).subscribe(data => {
      this.list= data;
      console.log(data);
    });
  }

  deleteProduct(id : number) {
    this.productService.delete(id).subscribe(() => {
      this.router.navigate(['/product/list']);
      confirm("Bạn có muốn xóa không?");
      alert('Bạn đã xóa thành công');
    }, error => {
      console.log(error);
    });
  }









}