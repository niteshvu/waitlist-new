import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoComponent } from './undo.component';

describe('UndoComponent', () => {
  let component: UndoComponent;
  let fixture: ComponentFixture<UndoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
