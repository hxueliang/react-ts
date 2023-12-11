import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { DetailDataIF, fetchDetailAPI } from '@/apis/10/detail'

export function useDetail() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  const [detail, setDetail] = useState<DetailDataIF | null>(null)

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await fetchDetailAPI(id!)
        setDetail(res.data.data)
      } catch (err) {
        throw new Error('fetch detail error')
      }
    }

    getDetail()
  }, [id])

  return {
    detail,
  }
}
