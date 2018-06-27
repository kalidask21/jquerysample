import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotavailableComponent } from './pagenotavailable.component';

describe('PagenotavailableComponent', () => {
  let component: PagenotavailableComponent;
  let fixture: ComponentFixture<PagenotavailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenotavailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
