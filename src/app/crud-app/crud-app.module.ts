import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudAppRoutingModule } from './crud-app-routing.module';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ToastModule} from 'primeng/toast';
import { CrudTableBarComponent } from './crud-table-bar/crud-table-bar.component';

@NgModule({
  declarations: [
    ProductsComponent,
    EditProductComponent,
    CrudTableBarComponent
  ],
  imports: [
    CommonModule,
    CrudAppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    NgxChartsModule,
    RouterModule.forChild([
      { path: '', component: CrudTableBarComponent },
      { path: 'crud-table', component: CrudTableBarComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'editProduct', component: EditProductComponent}
    ]),
  ]
})
export class CrudAppModule { }
