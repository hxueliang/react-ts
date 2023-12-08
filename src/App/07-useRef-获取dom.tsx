/**
 * 07-useRef-获取dom
 *
 * 获取dom的场景，
 * 可以直接反要获取的dom元素的类型，
 * 当成泛型参数传递给useRef，
 * 可以推导出.current属性的类型
 */

import { useEffect, useRef } from 'react'

function App() {
  const domRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    domRef.current?.focus()
  }, [])

  return (
    <>
      this is app
      <input ref={domRef} />
    </>
  )
}

export default App
