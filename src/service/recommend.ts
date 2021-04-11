import { get } from './base'

export interface ISliderProp {
  id: string
  pic: string
  link: string
}

export interface IAlbums {
  id: number
  pic: string
  title: string
  username: string
}

export interface IRecommendResult {
  sliders: Array<ISliderProp>
  albums: Array<IAlbums>
}

export function getRecommend(): Promise<IRecommendResult> {
  return get('/api/getRecommend')
}
