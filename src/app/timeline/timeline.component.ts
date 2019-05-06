import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input() statuses = [1, 2, 3];
  constructor() { }

  ngOnInit() {
  }

}
