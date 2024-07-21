import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userDataList: any[] = [];
  disabled: boolean = true;
  sharedData: any[] = [];
  dataList: any;

  constructor(private userData: UserDataService, private route: Router) { }

  ngOnInit(): void {
    this.getDataFromUserApi();
    this.userData.sharedData$.subscribe((data: any) => {
      this.sharedData = [data]
      console.log(this.sharedData);
    })
  }

  getDataFromUserApi() {
    this.userData.getData1().subscribe((res: any) => {
      this.userDataList = res;
    })
  }

  onEdit(id: any, data: any) {
    this.userData.setEditUserData(id, data);
    this.route.navigate(['editedUser']);
  }

  onDelete(id: any) {
    this.userData.deleteData(id).subscribe((res: any) => {
      this.userDataList = res;
      confirm("User Data Delete");
      this.getDataFromUserApi();
    })
  }

  addNewUser() {
    this.route.navigate(['demoForm']);
  }

}
