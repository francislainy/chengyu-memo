export interface IChengyu {
  id: number,
  chengyu: string,
  pinyin: string,
  translation: string,
  description: string,
  image: string,
  phrases?: IPhrase[]
}

interface IPhrase {
  id: number,
  hanzi: string,
  pinyin: string,
  translation: string
}
