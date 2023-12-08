/**
 * 02-useState-传递泛型参数
 */

import { useEffect, useState } from 'react'

type User = {
  name: string
  age: number
}

function App() {
  // 1.useState本身是一个泛型函数，可以传入具体的自定义类型
  // 1.1.限制useState函数参数的初始值必须满足类型为：User | () => User
  // 1.2.限制setUser函数的参数必须满足类型为：User | () => User | undefined
  // 1.3.user状态数据具备User类型相关的类型提示

  const [user, setUset] = useState<User>(
    // { name: 'hxl', age: 18 }
    () => ({ name: 'hxl', age: 18 })
  )
  console.log(user)

  useEffect(() => {
    setUset(
      // { name: 'hxl', age: 18 }
      () => ({ name: 'hxl', age: 19 })
    )
  }, [])
  console.log(user)

  return <>this is app {user.name}</>
}

export default App
