import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // selector: 'app-hello-world',
  templateUrl: './HelloWorld.component.html',
  styleUrls: ['./HelloWorld.component.scss']
})
export class HelloWorldComponent implements OnInit {
  @Input() title;
  @Input() rname;
  @Input() occupation;
  @Input() location;
  @Input() first;

  @Output() display = new EventEmitter();
  constructor() { }
  showInfo() {
    this.display.emit(`Name: ${this.rname}
    Occupation: ${this.occupation}
    Based In: ${this.location}
    First Appearance: ${this.first}`);
  }
  ngOnInit() {
  }


}
