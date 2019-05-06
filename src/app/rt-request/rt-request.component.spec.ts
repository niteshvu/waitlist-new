import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtRequestComponent } from './rt-request.component';

describe('RtRequestComponent', () => {
  let component: RtRequestComponent;
  let fixture: ComponentFixture<RtRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
