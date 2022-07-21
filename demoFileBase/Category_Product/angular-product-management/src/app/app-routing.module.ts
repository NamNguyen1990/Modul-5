import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";

const routes: Routes = [{
  path: 'product', children: [
    {path: 'list', component: ProductListComponent},
    {path:'create', component: ProductCreateComponent},
    {path:'edit/:id', component: ProductEditComponent},
    {path:'delete/:id', component: ProductDeleteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
