import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isSubmitted: boolean = false;

  public updatedData: any;
  public editedData: any
  public existingData: [] = [];


  productFrom = this.fb.group({
    name: ['', [Validators.required]],
    value: ['', [Validators.required]],
    productCategory: ['', [Validators.required]],
    productDescription: ['', [Validators.required]],
    productQuantity: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private route: Router, private productSer: ProductService) { }

  ngOnInit(): void {
    this.productSer.getProductData().subscribe((res: any) =>{
      this.existingData = res;
    })

  }

  onSubmitForm() {
    if (this.productFrom.value.name == '' || this.productFrom.value.value == '' ||
      this.productFrom.value.productCategory == '' || this.productFrom.value.productDescription == '' ||
      this.productFrom.value.productQuantity == '') {
      alert("Fillup All details");
    } else {
      this.isSubmitted = true;
      const idNum =  this.existingData.length + 1;
      const newId = idNum.toString();
      const productData = {
        id: newId,
        name: this.productFrom.value.name,
        value: this.productFrom.value.value,
        productCategory: this.productFrom.value.productCategory,
        productDescription: this.productFrom.value.productDescription,
        productQuantity: this.productFrom.value.productQuantity
      }
      this.productSer.createProduct(productData).subscribe(
        (res) => {
          console.log(res);
          this.route.navigate(['crud-table']);
        }
      );
    }
  }

  get name() {
    return this.productFrom.controls['name'];
  }

  get value() {
    return this.productFrom.controls['value'];
  }

  get productCategory() {
    return this.productFrom.controls['productCategory'];
  }

  get productDescription() {
    return this.productFrom.controls['productDescription'];
  }

  get productQuantity() {
    return this.productFrom.controls['productQuantity'];
  }
}
