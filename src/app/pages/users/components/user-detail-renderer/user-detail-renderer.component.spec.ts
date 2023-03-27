import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailRendererComponent } from './user-detail-renderer.component';

describe('UserDetailRendererComponent', () => {
  let component: UserDetailRendererComponent;
  let fixture: ComponentFixture<UserDetailRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
