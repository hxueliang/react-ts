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

  // 上拉加载更多
  const [hasMore, setHasMore] = useState(true)
  const loadMore = async () => {
    try {
      const res = await fetchArticlesAPI({
        channel_id: channelId,
        timestamp: articlesRes.pre_timestamp,
      })
      const { results, pre_timestamp } = res.data.data
      setArticlesRes({
        results: [...articlesRes.results, ...results],
        pre_timestamp,
      })

      setHasMore(results.length > 0)
    } catch (err) {
      throw new Error('fetch articles error')
    }
  }

  return {
    articlesRes,
    hasMore,
    loadMore,
  }
}

export { useList }
