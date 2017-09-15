import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public nin: string;
  public ren: string;

  constructor() { }

  ngOnInit() {
  }

  onFocus() {
    console.log("Focus called");
  }

  onFocusOut() {
    console.log("Focus Out called");
  }

}
