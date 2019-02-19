import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacingComponent } from './facing.component';

describe('FacingComponent', () => {
  let component: FacingComponent;
  let fixture: ComponentFixture<FacingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
