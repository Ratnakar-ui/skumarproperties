import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsettingsComponent } from './websettings.component';

describe('WebsettingsComponent', () => {
  let component: WebsettingsComponent;
  let fixture: ComponentFixture<WebsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
