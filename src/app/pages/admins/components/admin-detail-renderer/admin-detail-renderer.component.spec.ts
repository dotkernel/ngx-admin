import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailRendererComponent } from './admin-detail-renderer.component';

describe('AdminRoleRendererComponent', () => {
  let component: AdminDetailRendererComponent;
  let fixture: ComponentFixture<AdminDetailRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetailRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDetailRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
