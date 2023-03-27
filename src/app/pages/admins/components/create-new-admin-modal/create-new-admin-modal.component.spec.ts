import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewAdminModalComponent } from './create-new-admin-modal.component';

describe('CreateNewAdminModalComponent', () => {
  let component: CreateNewAdminModalComponent;
  let fixture: ComponentFixture<CreateNewAdminModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewAdminModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
