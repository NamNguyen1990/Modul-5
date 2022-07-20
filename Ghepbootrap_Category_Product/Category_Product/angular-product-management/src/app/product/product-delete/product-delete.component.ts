import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    categoryId: new FormControl()
  });
  obj: any;

  listCategory:Category[] = [];

  id: any;

  constructor(private httpClient: HttpClient,
              private router:Router,
              private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');

      const product = this.getProduct(this.id);
    });
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe((data)=>{
    console.log(data)
    this.listCategory = data;
  })}

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(data =>{
      this.productForm = new FormGroup({
        name: new FormControl(data.name),
        price: new FormControl(data.price),
        categoryId: new FormControl(data.category.id),
      })
    });
  }

  delete(id: number) {
    this.obj = {
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      category: {
        id: this.productForm.value.categoryId
      }
    },
      this.productService.delete(id).subscribe(() => {
        this.router.navigate(['/product-be']);
        alert('Xóa thành công sản phẩm');
      }, error => {
        console.log(error);
      });
  }
}
