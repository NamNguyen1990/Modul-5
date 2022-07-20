import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  list: any;

  constructor(private httpClient: HttpClient,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.findAll().subscribe((data)=> {
      console.log(data)
      this.list = data;

    }, error => {

    })
  }

}
