import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { IChengyu } from '../../models/Chengyu.model';
import {CardDecoratorComponent} from '../card-decorator/card-decorator.component';

@Component({
  selector: 'app-chengyu-detail',
  standalone: true,
  imports: [CommonModule, CardDecoratorComponent],
  templateUrl: './chengyu-detail.component.html',
  styleUrl: './chengyu-detail.component.css'
})
export class ChengyuDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IChengyu) {}

  showHanzi = true;

  toggleHanzi(): void {
    this.showHanzi = !this.showHanzi;
  }

  highlightChengyu(text: string): string {
    // Check if the text contains the current chengyu
    if (text.includes(this.data.chengyu)) {
      // Replace the chengyu with a bold version
      return text.replace(
        new RegExp(this.data.chengyu, 'g'),
        `<span class="text-red-800">${this.data.chengyu}</span>`
      );
    }
    return text;
  }
}
