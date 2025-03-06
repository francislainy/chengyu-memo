import {Component, OnInit} from '@angular/core';
import {IChengyu} from '../../models/Chengyu.model';
import {ChengyuItemComponent} from '../chengyu-item/chengyu-item.component';
import {ChengyuService} from '../../services/chengyu.service';

@Component({
  selector: 'app-chengyu-list',
  imports: [
    ChengyuItemComponent
  ],
  templateUrl: './chengyu-list.component.html',
  styleUrl: './chengyu-list.component.css'
})
export class ChengyuListComponent implements OnInit {

  chengyuList: IChengyu[] = [];

  constructor(private chengyuService: ChengyuService) {
  }

  ngOnInit(): void {
    this.chengyuService.getChengyus().subscribe({
      next: (data) => {
        console.log('Fetched phrases:', data);
        this.chengyuList = data;
      }
    });
  }
}
