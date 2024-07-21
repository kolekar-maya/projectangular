import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edited-users',
  templateUrl: './edited-users.component.html',
  styleUrls: ['./edited-users.component.css']
})
export class EditedUsersComponent implements OnInit {
  isSubmitted: boolean = false;
  myForm: any;
  public updatedData: any;

  constructor(private fb: FormBuilder, private userData: UserDataService, private route: Router) { }

  ngOnInit(): void {
    this.userData.getEditUserData().subscribe((res: any) => {
      this.updatedData = res;
    },
      (error: any) => {
        console.log('Error fetching user data', error);
      });
    this.myForm = this.fb.group({
      fname: [this.updatedData.fname, [Validators.required]],
      lname: [this.updatedData.lname, [Validators.required]],
      email: [this.updatedData.email, [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      address: [this.updatedData.address, [Validators.required]],
      pnumber: [this.updatedData.pnumber, [Validators.required, Validators.maxLength(10)]]
    });
  }

  onSubmitForm() {
    this.userData.editData(this.updatedData.id, this.myForm.value).subscribe((res: any) => {
      confirm("User Data Updated");
      this.route.navigate(['']);
    })
  }

  get f() {
    return this.myForm.controls;
  }

}
