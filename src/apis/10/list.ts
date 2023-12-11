import { http } from '@/utils'

import type { ResType } from './shared'

/**
 * 渠道列表项类型
 */
export type ChannelItem = {
  id: number
  name: string
}
/**
 * 渠道结果类型
 */
type ChannelRes = {
  channels: ChannelItem[]
}

// 获取频道列表
export function fetchChannelAPI() {
  return http.request<ResType<ChannelRes>>({
    url: '/channels',
  })
}

/**
 * 文章列表请求参数
 */
type paramsReq = {
  channel_id: string
  timestamp: string
}
/**
 * 文章列表项类型
 */
type ArticlesItem = {
  art_id: string
  title: string
  aut_id: string
  comm_count: number
  pubdate: string
  aut_name: string
  is_top: number
  cover: {
    type: number
    images: string[]
  }
}
/**
 * 文章结果类型
 */
export type ArticlesRes = {
  results: ArticlesItem[]
  pre_timestamp: string
}

// 获取文章列表
export function fetchArticlesAPI(params: paramsReq) {
  return http.request<ResType<ArticlesRes>>({
    url: '/articles',
    params,
  })
}
