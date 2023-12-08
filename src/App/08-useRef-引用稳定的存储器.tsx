/**
 * 08-useRef-引用稳定的存储器
 *
 * 可以通过泛型传入联合类型来做，如定时器场景
 */

import { useEffect, useRef } from 'react'

function App() {
  const timeId = useRef<number | undefined>(undefined)

  useEffect(() => {
    timeId.current = setInterval(() => {
      console.log(1)
    }, 1000)

    return () => clearInterval(timeId.current)
  }, [])

  return <>this is app</>
}

export default App
