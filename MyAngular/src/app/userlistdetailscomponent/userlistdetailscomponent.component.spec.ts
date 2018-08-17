import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistdetailscomponentComponent } from './userlistdetailscomponent.component';

describe('UserlistdetailscomponentComponent', () => {
  let component: UserlistdetailscomponentComponent;
  let fixture: ComponentFixture<UserlistdetailscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlistdetailscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistdetailscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
