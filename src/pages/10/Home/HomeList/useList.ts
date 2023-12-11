import { useEffect, useState } from 'react'

import { ArticlesRes, fetchArticlesAPI } from '@/apis/10/list'

function useList(channelId: string) {
  const [articlesRes, setArticlesRes] = useState<ArticlesRes>({
    results: [],
    pre_timestamp: '' + new Date().getTime(),
  })

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await fetchArticlesAPI({
          channel_id: channelId,
          timestamp: '' + new Date().getTime(),
        })
        const { results, pre_timestamp } = res.data.data
        setArticlesRes({
          results,
          pre_timestamp,
        })
      } catch (err) {
        throw new Error('fetch articles error')
      }
    }
    getList()
  }, [channelId])

  return {
    articlesRes,
  }
}

export { useList }
