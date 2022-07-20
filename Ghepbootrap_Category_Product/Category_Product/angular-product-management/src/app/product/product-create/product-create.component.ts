import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    categoryId: new FormControl()
  });
  obj: any;

  listCategory:Category[] = [];

  constructor(private httpClient: HttpClient,private router:Router,
              private productService: ProductService,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe((data)=>{
      console.log(data)
      this.listCategory = data;
    })








    this.productService.findAll().subscribe((data)=> {
      console.log(data)
      this.list = data;

    }, error => {
    })
  }

  submit() {
    console.log(this.productForm.value)
    this.obj = {
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      category: {
        id: this.productForm.value.categoryId
      }
    }





    // (Đoạn này dùng để chuyển trang)
    this.productService.save(this.obj).subscribe((data)=>{
      console.log(data)
      alert('Thành công')
      this.router.navigate(['/product/list'])
    }, error => {
      alert('Lỗi')
    })
    // (Đoạn này dùng để chuyển trang)
  }












// (Đoạn này dùng để chuyển trang)
  list: any;
  findByName() {
    const name = this.productForm.value.name
    this.productService.findByName(name).subscribe(data => {
      this.list= data;
      console.log(data);
    });
  }
  searchByCategoryId(id : any) {
    // const id = this.productForm.value.categoryId;
    this.productService.findCategoryId(id).subscribe(data => {
      this.list= data;
      console.log(data);
    });
  }
// (Đoạn này dùng để chuyển trang)
}
