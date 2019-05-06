import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtHomeComponent } from './rt-home.component';

describe('RtHomeComponent', () => {
  let component: RtHomeComponent;
  let fixture: ComponentFixture<RtHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
