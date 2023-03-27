import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewUserModalComponent } from './create-new-user-modal.component';

describe('CreateNewUserModalComponent', () => {
  let component: CreateNewUserModalComponent;
  let fixture: ComponentFixture<CreateNewUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewUserModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
