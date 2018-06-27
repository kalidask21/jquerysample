import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballcompetitionsComponent } from './footballcompetitions.component';

describe('FootballcompetitionsComponent', () => {
  let component: FootballcompetitionsComponent;
  let fixture: ComponentFixture<FootballcompetitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballcompetitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballcompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
