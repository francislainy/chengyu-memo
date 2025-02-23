import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { IChengyu } from '../../models/Chengyu.model';

@Component({
  selector: 'app-chengyu-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chengyu-detail.component.html',
  styleUrl: './chengyu-detail.component.css'
})
export class ChengyuDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IChengyu) {}
}

