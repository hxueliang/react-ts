import { http } from '@/utils'

import type { ResType } from './shared'

// 定义具体的接口类型
type ChannelItem = {
  id: number
  name: string
}
type ChannelRes = {
  channels: ChannelItem[]
}

// 封装具体接口
export function fetchChannelAPI() {
  return http.request<ResType<ChannelRes>>({
    url: '/channels',
  })
}
