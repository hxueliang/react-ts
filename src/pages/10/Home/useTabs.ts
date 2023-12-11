import { useEffect, useState } from 'react'

import { fetchChannelAPI, type ChannelItem } from '@/apis/10/list'
/**
 * channels自定hooks
 * @returns
 */
function useChannels() {
  const [channels, setChannels] = useState<ChannelItem[]>([])

  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await fetchChannelAPI()
        setChannels(res.data.data.channels)
      } catch (err) {
        throw new Error('fetch channel error')
      }
    }
    getChannels()
  }, [])

  return {
    channels,
  }
}

export { useChannels }
