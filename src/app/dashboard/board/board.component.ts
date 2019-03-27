import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
