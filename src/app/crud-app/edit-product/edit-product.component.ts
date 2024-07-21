import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  isSubmitted: boolean = false;

  public updatedData: any;
  public editedData: any
  public existingData: any;
  productFrom: any;


  constructor(private fb: FormBuilder, private route: Router, private productSer: ProductService) { }

  ngOnInit(): void {
    this.productSer.getEditUserData().subscribe((res: any) => {
      this.updatedData = res;
    },
      (error: any) => {
        console.log('Error fetching user data', error);
      });
    this.productFrom = this.fb.group({
      name: [this.updatedData.name, [Validators.required]],
      value: [this.updatedData.value, [Validators.required]],
      productCategory: [this.updatedData.productCategory, [Validators.required]],
      productDescription: [this.updatedData.productDescription, [Validators.required]],
      productQuantity: [this.updatedData.productQuantity, [Validators.required]],
    });

  }

  onSubmitForm() {
    this.productSer.editData(this.updatedData.id, this.productFrom.value).subscribe((res: any) => {
      confirm("Product Data Updated");
      this.route.navigate(['crud-table']);
    })
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
    return this.productFrom.controls['productDesciption'];
  }

  get productQuantity() {
    return this.productFrom.controls['productQuantity'];
  }

}
