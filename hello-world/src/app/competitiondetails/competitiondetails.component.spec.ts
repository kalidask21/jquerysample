import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitiondetailsComponent } from './competitiondetails.component';

describe('CompetitiondetailsComponent', () => {
  let component: CompetitiondetailsComponent;
  let fixture: ComponentFixture<CompetitiondetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitiondetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
