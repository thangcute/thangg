import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryadminComponent } from './categoryadmin.component';

describe('CategoryadminComponent', () => {
  let component: CategoryadminComponent;
  let fixture: ComponentFixture<CategoryadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
