import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {User} from './Users';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() user:User ;
  constructor() { }

  ngOnInit() {
  }
}
