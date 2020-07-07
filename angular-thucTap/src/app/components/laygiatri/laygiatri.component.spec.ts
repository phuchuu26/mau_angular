import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaygiatriComponent } from './laygiatri.component';

describe('LaygiatriComponent', () => {
  let component: LaygiatriComponent;
  let fixture: ComponentFixture<LaygiatriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaygiatriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaygiatriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
