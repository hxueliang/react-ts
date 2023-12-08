/**
 * 01-useState-类型自动推导
 *
 * 场景：明确的初始值
 */

import { useEffect, useState } from 'react'

function App() {
  const [value, setValue] = useState(false)
  // 'value' is assigned a value but never used.
  // const setValue: React.Dispatch<React.SetStateAction<boolean>>

  // const changeValue = () => setValue(100) // 类型“100”的参数不能赋给类型“SetStateAction<boolean>”的参数
  const changeValue = () => setValue(!value)

  const [list, setList] = useState([1])
  // 'list' is assigned a value but never used.
  // const setList: React.Dispatch<React.SetStateAction<never[]>>

  console.log(list)

  useEffect(() => {
    // setList(['1', 2, 3]) // 不能将类型“string”分配给类型“number”。
    setList([2, 3])
  }, [])

  return (
    <>
      this is app {value.toString()}
      <button onClick={changeValue}>changeValue</button>
    </>
  )
}

export default App
