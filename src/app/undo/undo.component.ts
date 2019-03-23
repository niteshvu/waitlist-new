import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fade } from './../../animation';
@Component({
  selector: 'undo',
  templateUrl: './undo.component.html',
  styleUrls: ['./undo.component.css']
})
export class UndoComponent {
  @Input() visible: boolean;
  @Output() switch: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  clicked(){
    this.switch.emit(!this.visible);
  }
}
