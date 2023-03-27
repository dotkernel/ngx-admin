import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileModalAccountComponent } from './profile-modal-account.component';

describe('ProfileModalAccountComponent', () => {
  let component: ProfileModalAccountComponent;
  let fixture: ComponentFixture<ProfileModalAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileModalAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileModalAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
