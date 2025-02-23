import {Component, Input} from '@angular/core';
import {IChengyu} from '../../models/Chengyu.model';
import {CardDecoratorComponent} from '../card-decorator/card-decorator.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {ChengyuDetailComponent} from '../chengyu-detail/chengyu-detail.component';

@Component({
  selector: 'app-chengyu-item',
  imports: [
    CardDecoratorComponent,
    MatDialogModule
  ],
  templateUrl: './chengyu-item.component.html',
  styleUrl: './chengyu-item.component.css',
  standalone: true,
})
export class ChengyuItemComponent {
  @Input() chengyu!: IChengyu;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(ChengyuDetailComponent, {
      width: '250px',
      data: this.chengyu
    });
  }
}
