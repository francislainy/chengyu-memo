import { Component } from '@angular/core';
import {ChengyuListComponent} from '../chengyu-list/chengyu-list.component';

@Component({
  selector: 'app-home',
  imports: [
    ChengyuListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
