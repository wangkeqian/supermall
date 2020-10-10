import {request} from './request'

export function getGoodsByCategory(keys){
  return request({
    url: '/category/search',
    params: {
      keys
    }
  })
}