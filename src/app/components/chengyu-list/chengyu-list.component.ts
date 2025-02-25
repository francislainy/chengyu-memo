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
      description: "It's used to describe a person who is very decisive and resolute, with an attitude of firmness and determination. Imagine someone who makes decisions with such conviction that it's like they're cutting through nails and iron—there's no hesitation or doubt.",
      phrases: ["phrase1", "phrase2", "phrase3"]
    },
    {
      id: 2,
      chengyu: "一箭双雕",
      pinyin: "yī jiàn shuāng diāo",
      image: "yijianshuangdiao-箭双雕.png",
      translation: "one arrow, two eagles.",
      description: "It means achieving two goals with a single action, much like the English phrase \"killing two birds with one stone.\" Imagine a skilled archer releasing a single arrow that hits two eagles at once—it's all about efficiency and skill.",
      phrases: ["phrase1", "phrase2", "phrase3"]
    },
    {
      id: 3,
      chengyu: "不可思议",
      pinyin: "bù kě sī yì",
      image: "bukesiyi-不可思议.png",
      translation: "unimaginable, incredible.",
      description: "It's used to describe something that is beyond ordinary comprehension, astonishing, or extraordinary. Imagine witnessing a breathtaking natural phenomenon or an unbelievable feat—it's something so incredible that it defies belief.",
      phrases: ["phrase1", "phrase2", "phrase3"]
    },
    {
      id: 4,
      chengyu: "斩钉截铁",
      pinyin: "zhǎn dīng jié tiě",
      image: "yijianshuangdiao-箭双雕.png",
      translation: "unimaginable, incredible.",
      description: "It's used to describe a person who is very decisive and resolute, with an attitude of firmness and determination. Imagine someone who makes decisions with such conviction that it's like they're cutting through nails and iron—there's no hesitation or doubt.",
      phrases: ["phrase1", "phrase2", "phrase3"]
    },
    {
      id: 5,
      chengyu: "斩钉截铁",
      pinyin: "zhǎn dīng jié tiě",
      image: "zhandingjietie-斩钉截铁.png",
      translation: "cutting nails and slicing iron.",
      description: "It's used to describe a person who is very decisive and resolute, with an attitude of firmness and determination. Imagine someone who makes decisions with such conviction that it's like they're cutting through nails and iron—there's no hesitation or doubt.",
      phrases: ["phrase1", "phrase2", "phrase3"]
    },
    {
      id: 6,
      chengyu: "斩钉截铁",
      pinyin: "zhǎn dīng jié tiě",
      image: "bukesiyi-不可思议.png",
      translation: "cutting nails and slicing iron.",
      description: "It's used to describe a person who is very decisive and resolute, with an attitude of firmness and determination. Imagine someone who makes decisions with such conviction that it's like they're cutting through nails and iron—there's no hesitation or doubt.",
      phrases: ["phrase1", "phrase2", "phrase3"]
    },
    {
      id: 7,
      chengyu: "斩钉截铁",
      pinyin: "zhǎn dīng jié tiě",
      image: "yijianshuangdiao-箭双雕.png",
      translation: "cutting nails and slicing iron.",
      description: "It's used to describe a person who is very decisive and resolute, with an attitude of firmness and determination. Imagine someone who makes decisions with such conviction that it's like they're cutting through nails and iron—there's no hesitation or doubt.",
      phrases: ["phrase1", "phrase2", "phrase3"]
    },
    {
      id: 8,
      chengyu: "斩钉截铁",
      pinyin: "zhǎn dīng jié tiě",
      image: "bukesiyi-不可思议.png",
      translation: "cutting nails and slicing iron.",
      description: "It's used to describe a person who is very decisive and resolute, with an attitude of firmness and determination. Imagine someone who makes decisions with such conviction that it's like they're cutting through nails and iron—there's no hesitation or doubt.",
      phrases: ["phrase1", "phrase2", "phrase3"]
    },
  ]
}
