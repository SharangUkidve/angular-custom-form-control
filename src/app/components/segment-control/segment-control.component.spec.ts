import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentControlComponent } from './segment-control.component';

describe('SegmentControlComponent', () => {
  let component: SegmentControlComponent;
  let fixture: ComponentFixture<SegmentControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
