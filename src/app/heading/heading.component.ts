import { Component, OnInit, Input } from '@angular/core';
import { slideInDownAnimation, fadeOutOnLeaveAnimation, fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation({
      duration: 400
    }),
    slideInDownAnimation()
  ]
})
export class HeadingComponent {
  @Input() heading;
  constructor() { }

}
