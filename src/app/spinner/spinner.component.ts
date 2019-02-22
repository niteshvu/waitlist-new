import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() color: string;
  @Input() width: string;
  @Input() loaderHeight: string;
  @Input() border: string;
  @Input() borderTop: string;




  constructor() { }

  ngOnInit() {
  }

}
