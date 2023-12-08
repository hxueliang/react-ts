import { useState } from 'react'

/**
 * 03-useState-初始值为null
 */
type User = {
  name: string
  age: number
}

function App() {
  // 1.当我们不知道状态的初始值是什么，将useState初始值设为null是一个常见的做法，可以通过具体类型联合null来做显式注解
  // 1.1.限制useState函数参数的初始值可以是User | null
  // 1.2.限制setUser函数的参数类型可以是User | null
  const [user, setUser] = useState<User | null>(null)

  const changeUser = () => {
    setUser({ name: 'hxl', age: 19 })
  }

  return (
    <>
      this is app - {user?.age}
      <button onClick={changeUser}>{JSON.stringify(user)}</button>
    </>
  )
}

export default App
