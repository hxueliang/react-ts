/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('@/pages/10/Home'))
const Detail = lazy(() => import('@/pages/10/Detail'))

const router10 = [
  {
    path: '/10',
    element: (
      <Suspense fallback='加载中'>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/10/detail',
    element: (
      <Suspense fallback='加载中'>
        <Detail />
      </Suspense>
    ),
  },
]

export default router10
