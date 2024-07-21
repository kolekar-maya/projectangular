import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedUsersComponent } from './edited-users.component';

describe('EditedUsersComponent', () => {
  let component: EditedUsersComponent;
  let fixture: ComponentFixture<EditedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditedUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
