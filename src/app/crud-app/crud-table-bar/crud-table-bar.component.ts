import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-crud-table-bar',
  templateUrl: './crud-table-bar.component.html',
  styleUrls: ['./crud-table-bar.component.css'],

})
export class CrudTableBarComponent implements OnInit {
  product: [] = [];

  names: any[] | undefined;

  multi: any[] | undefined;

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'product Name';
  showYAxisLabel = true;
  yAxisLabel = 'product Price';

  colorScheme = {
    domain: ['#AAAAAA']
  };

  constructor(private productData: ProductService, private route: Router) {

  }

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    this.productData.getProductData().subscribe(
      (response: any) => {
        this.product = response;
        this.names = this.product;
        Object.assign(this.names);
      }
    )
  }

  addNewProduct() {
    this.route.navigate(['products']);
  }

  onEditProductData(id: any, data: any) {
    this.productData.setEditUserData(id, data);
    this.route.navigate(['editProduct']);
  }

  deleteProduct(id: any) {
    this.productData.deleteProduct(id).subscribe((res: any) => {
      this.product = res;
    });
    this.getProductDetails();
  }

  onSelect(event: any) {
    console.log(event);
  }

}
