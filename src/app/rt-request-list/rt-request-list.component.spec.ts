import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtRequestListComponent } from './rt-request-list.component';

describe('RtRequestListComponent', () => {
  let component: RtRequestListComponent;
  let fixture: ComponentFixture<RtRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
