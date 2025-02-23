import {Component} from '@angular/core';
import {IChengyu} from '../../models/Chengyu.model';
import {ChengyuItemComponent} from '../chengyu-item/chengyu-item.component';

@Component({
  selector: 'app-chengyu-list',
  imports: [
    ChengyuItemComponent
  ],
  templateUrl: './chengyu-list.component.html',
  styleUrl: './chengyu-list.component.css'
})
export class ChengyuListComponent {

  chengyuList: IChengyu[] = [
    {
      id: 1,
      chengyu: "斩钉截铁",
      pinyin: "zhǎn dīng jié tiě",
      image: "zhandingjietie-斩钉截铁.png",
      translation: "cutting nails and slicing iron.",
      description: "It's used to describe a person who is very decisive and resolute, with an attitude of firmness and determination. Imagine someone who makes decisions with such conviction that it's like they're cutting through nails and iron—there's no hesitation or doubt."
    },
    {
      id: 2,
      chengyu: "斩钉截铁",
      pinyin: "zhǎn dīng jié tiě",
      image: "zhandingjietie-斩钉截铁.png",
      translation: "cutting nails and slicing iron.",
      description: "It's used to describe a person who is very decisive and resolute, with an attitude of firmness and determination. Imagine someone who makes decisions with such conviction that it's like they're cutting through nails and iron—there's no hesitation or doubt."
    },
    {
      id: 3,
      chengyu: "斩钉截铁",
      pinyin: "zhǎn dīng jié tiě",
      image: "zhandingjietie-斩钉截铁.png",
      translation: "cutting nails and slicing iron.",
      description: "It's used to describe a person who is very decisive and resolute, with an attitude of firmness and determination. Imagine someone who makes decisions with such conviction that it's like they're cutting through nails and iron—there's no hesitation or doubt."
    },
    {
      id: 4,
      chengyu: "斩钉截铁",
      pinyin: "zhǎn dīng jié tiě",
      image: "zhandingjietie-斩钉截铁.png",
      translation: "cutting nails and slicing iron.",
      description: "It's used to describe a person who is very decisive and resolute, with an attitude of firmness and determination. Imagine someone who makes decisions with such conviction that it's like they're cutting through nails and iron—there's no hesitation or doubt."
    },
    {
      id: 5,
      chengyu: "斩钉截铁",
      pinyin: "zhǎn dīng jié tiě",
      image: "zhandingjietie-斩钉截铁.png",
      translation: "cutting nails and slicing iron.",
      description: "It's used to describe a person who is very decisive and resolute, with an attitude of firmness and determination. Imagine someone who makes decisions with such conviction that it's like they're cutting through nails and iron—there's no hesitation or doubt."
    },
    {
      id: 6,
      chengyu: "斩钉截铁",
      pinyin: "zhǎn dīng jié tiě",
      image: "zhandingjietie-斩钉截铁.png",
      translation: "cutting nails and slicing iron.",
      description: "It's used to describe a person who is very decisive and resolute, with an attitude of firmness and determination. Imagine someone who makes decisions with such conviction that it's like they're cutting through nails and iron—there's no hesitation or doubt."
    },
    {
      id: 7,
      chengyu: "斩钉截铁",
      pinyin: "zhǎn dīng jié tiě",
      image: "zhandingjietie-斩钉截铁.png",
      translation: "cutting nails and slicing iron.",
      description: "It's used to describe a person who is very decisive and resolute, with an attitude of firmness and determination. Imagine someone who makes decisions with such conviction that it's like they're cutting through nails and iron—there's no hesitation or doubt."
    },
    {
      id: 8,
      chengyu: "斩钉截铁",
      pinyin: "zhǎn dīng jié tiě",
      image: "zhandingjietie-斩钉截铁.png",
      translation: "cutting nails and slicing iron.",
      description: "It's used to describe a person who is very decisive and resolute, with an attitude of firmness and determination. Imagine someone who makes decisions with such conviction that it's like they're cutting through nails and iron—there's no hesitation or doubt."
    },
  ]
}
