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
      width: '550px',
      height: '550px',
      maxHeight: '90vh', // Add this to prevent dialog from being taller than viewport
      panelClass: 'custom-dialog-container', // Add this for custom styling
      autoFocus: false, // This can sometimes help with scrolling issues
      data: this.chengyu
    });
  }
}
