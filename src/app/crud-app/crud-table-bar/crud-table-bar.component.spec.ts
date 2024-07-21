import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTableBarComponent } from './crud-table-bar.component';

describe('CrudTableBarComponent', () => {
  let component: CrudTableBarComponent;
  let fixture: ComponentFixture<CrudTableBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudTableBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudTableBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
