import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { EditedUsersComponent } from './edited-users/edited-users.component';


@NgModule({
  declarations: [
    UserListComponent,
    DemoFormComponent,
    EditedUsersComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: UserListComponent },
      { path: 'demoForm', component: DemoFormComponent},
      { path: 'editedUser', component: EditedUsersComponent}
    ]),
  ]
})
export class UserModule { }
