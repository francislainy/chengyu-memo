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
      translation: "cutting nails and slicing iron",
      description: "It's used to describe a person who is very decisive and resolute, with an attitude of firmness and determination. Imagine someone who makes decisions with such conviction that it's like they're cutting through nails and iron—there's no hesitation or doubt.",
      phrases: ["他斩钉截铁地说：‘我一定会成功。’"]
    },
    {
      id: 2,
      chengyu: "一箭双雕",
      pinyin: "yī jiàn shuāng diāo",
      image: "yijianshuangdiao-箭双雕.png",
      translation: "one arrow, two eagles",
      description: "It means achieving two goals with a single action, much like the English phrase \"killing two birds with one stone.\" Imagine a skilled archer releasing a single arrow that hits two eagles at once—it's all about efficiency and skill.",
      phrases: ["这次旅行不仅放松了心情，还学到了很多知识，真是一箭双雕。"]
    },
    {
      id: 3,
      chengyu: "不可思议",
      pinyin: "bù kě sī yì",
      image: "bukesiyi-不可思议.png",
      translation: "unimaginable, incredible",
      description: "It's used to describe something that is beyond ordinary comprehension, astonishing, or extraordinary. Imagine witnessing a breathtaking natural phenomenon or an unbelievable feat—it's something so incredible that it defies belief.",
      phrases: ["这个奇迹真是不可思议。"]
    },
    {
      id: 4,
      chengyu: "一言为定",
      pinyin: "yī yán wéi dìng",
      image: "yiyanweiding-言为定.png",
      translation: "one word and it’s settled",
      description: "It signifies that once a statement or commitment is made, it is final and binding. Essentially, it's about keeping one's word and standing by a decision or agreement.",
      phrases: ["哈哈，放心吧，我们不会吃马肉。我的意思是一言为定"]
    },
    {
      id: 5,
      chengyu: "物美价廉",
      pinyin: "wù měi jià lián",
      image: "na-chengyu.png",
      translation: "good quality and cheap/a bargain",
      description: "It means getting a bargain is more important than face.",
      phrases: ["物美价廉比面子更重要"]
    },
    {
      id: 6,
      chengyu: "热泪盈眶",
      pinyin: "rè lèi yíng kuāng",
      image: "na-chengyu.png",
      translation: "eyes brimming with tears of excitement",
      description: "It describes being extremely moved. Imagine when you recall happy memories, you might be moved to tears.",
      phrases: ["当你想起快乐的往事时，都可能会热泪盈眶。"]
    },
    {
      id: 7,
      chengyu: "无儿无女",
      pinyin: "wú ér wú nǚ",
      image: "na-chengyu.png",
      translation: "childless",
      description: "It describes someone who has no children. Imagine someone who finds it even harder because they are childless.",
      phrases: ["更不容易的是，哈拿无儿无女，比妮拿却有不少孩子"]
    },
    {
      id: 8,
      chengyu: "难以置信",
      pinyin: "nán yǐ zhì xìn",
      image: "na-chengyu.png",
      translation: "hard to believe / incredible",
      description: "It describes something that is hard to believe. Imagine a brother's wife committing adultery and leaving him, he says: 'I was shocked, it was hard to believe.'",
      phrases: ["一个弟兄的妻子在跟人通奸后离弃了他。他说：“我感到十分震惊、难以置信"]
    },
    {
      id: 9,
      chengyu: "一文不值",
      pinyin: "yī wén bù zhí",
      image: "na-chengyu.png",
      translation: "not worth a cent; be utterly worthless",
      description: "It describes something that is utterly worthless. Imagine feeling trampled and worthless, but Jehovah's love for you does not diminish.",
      phrases: ["就算你感觉遭人践踏、一文不值，耶和华对你的爱也不会因此减少半分"]
    },
    {
      id: 10,
      chengyu: "始终如一",
      pinyin: "shǐ zhōng rú yī",
      image: "na-chengyu.png",
      translation: "unswerving from start to finish; consistently",
      description: "It describes being consistent from start to finish. Imagine no matter how others treat you, Jehovah's love for you remains consistent.",
      phrases: ["不论别人怎么对待你，天父耶和华对你的爱都始终如一。"]
    },
    {
      id: 11,
      chengyu: "走投无路",
      pinyin: "zǒu tóu wú lù",
      image: "na-chengyu.png",
      translation: "no way out; at an impasse; at a dead end",
      description: "It describes being at a dead end. Imagine facing severe trials and feeling at a dead end, is there a scripture that particularly comforts you?",
      phrases: ["当你面对严峻的考验，甚至觉得走投无路时，有没有哪节经文特别能安慰你呢"]
    },
    {
      id: 12,
      chengyu: "年复一年",
      pinyin: "nián fù yī nián",
      image: "na-chengyu.png",
      translation: "year after year",
      description: "It describes something happening year after year.",
      phrases: ["年复一年，他都在同一个地方度假。"]
    },
    {
      id: 13,
      chengyu: "久别重逢",
      pinyin: "jiǔ bié chóng féng",
      image: "na-chengyu.png",
      translation: "reunion after a long separation",
      description: "It describes reuniting after a long separation.",
      phrases: ["久别重逢的朋友们都非常激动。"]
    },
    {
      id: 14,
      chengyu: "丰衣足食",
      pinyin: "fēng yī zú shí",
      image: "na-chengyu.png",
      translation: "well-clothed and well-fed",
      description: "It describes being well-clothed and well-fed.",
      phrases: ["他们过着丰衣足食的生活。"]
    },
    {
      id: 15,
      chengyu: "微不足道",
      pinyin: "wēi bù zú dào",
      image: "na-chengyu.png",
      translation: "insignificant",
      description: "It describes something that is insignificant.",
      phrases: ["这个问题在整个计划中显得微不足道。"]
    },
    {
      id: 16,
      chengyu: "一无是处",
      pinyin: "yī wú shì chù",
      image: "na-chengyu.png",
      translation: "be good for nothing; have nothing worthy of praise",
      description: "It describes someone who is good for nothing.",
      phrases: ["他觉得自己一无是处。"]
    },
    {
      id: 17,
      chengyu: "万众瞩目",
      pinyin: "wàn zhòng zhǔ mù",
      image: "na-chengyu.png",
      translation: "very much attention",
      description: "It describes something that attracts very much attention.",
      phrases: ["这场演出吸引了万众瞩目。"]
    },
    {
      id: 18,
      chengyu: "无与伦比",
      pinyin: "wú yǔ lún bǐ",
      image: "na-chengyu.png",
      translation: "unparalleled",
      description: "It describes something that is unparalleled.",
      phrases: ["他的才华无与伦比。"]
    },
    {
      id: 19,
      chengyu: "震耳欲聋",
      pinyin: "zhèn ěr yù lóng",
      image: "na-chengyu.png",
      translation: "ear-splitting; deafening",
      description: "It describes something that is ear-splitting or deafening.",
      phrases: ["音乐声震耳欲聋。"]
    },
    {
      id: 20,
      chengyu: "言出必行",
      pinyin: "yán chū bì xíng",
      image: "na-chengyu.png",
      translation: "suit the action to the word",
      description: "It describes someone who suits the action to the word.",
      phrases: ["他是一个言出必行的人。"]
    },
    {
      id: 21,
      chengyu: "挺身而出",
      pinyin: "tǐng shēn ér chū",
      image: "na-chengyu.png",
      translation: "to step forward bravely; come out boldly",
      description: "It describes someone who steps forward bravely.",
      phrases: ["在危急时刻，他挺身而出。"]
    }
  ]
}
