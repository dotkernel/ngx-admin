import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdminModalComponent } from './update-admin-modal.component';

describe('UpdateAdminModalComponent', () => {
  let component: UpdateAdminModalComponent;
  let fixture: ComponentFixture<UpdateAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdminModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
