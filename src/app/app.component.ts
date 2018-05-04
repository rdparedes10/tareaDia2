import { Component } from '@angular/core';
import { USERS } from './list/Users';
import { ListComponent } from './list/list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = USERS;
}
