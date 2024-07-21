import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {
  isSubmitted: boolean = false;
  myForm: any;
  public updatedData: any;
  public editedData: any
  public existingData: any;

  constructor(private fb: FormBuilder, private userData: UserDataService, private route: Router) { }

  ngOnInit(): void {
    this.userData.getData1().subscribe((res: any) => {
      this.existingData = res;
    })
    this.myForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      address: ['', [Validators.required]],
      pnumber: ['', [Validators.required, Validators.maxLength(10)]]
    });
  }

  onSubmitForm() {
    const userExists: any[] = [];
    this.isSubmitted = true;
    console.log(this.myForm.value);
    this.existingData.forEach((element: any) => {
      if (element.fname) {
        userExists.push(element.fname);
      }
      console.log(userExists);
    });
    if (userExists.includes(this.myForm.value.fname)) {
      confirm("User already Exists");
    } else {
      this.userData.postData(this.myForm.value).subscribe((res: any) => {
        alert("New User Added Successfully");
        this.route.navigate(['']);
      })
    }
  }

  get f() {
    return this.myForm.controls;
  }


}
