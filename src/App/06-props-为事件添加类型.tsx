/**
 * 06-props-为事件添加类型
 *
 * 1.在组件内部调用时，需要遵守类型的约束，参数传递需要满足要求
 * 2.绑定prop时如果绑定内联函数直接可以推断出参数类型，否则需要单独注解匹配的参数类型
 */

type Props = {
  onGetMsg?: (msg: string) => void
}

function Son(props: Props) {
  const { onGetMsg } = props
  const handleClick = () => {
    // onGetMsg?.(10) // 类型“number”的参数不能赋给类型“string”的参数。
    onGetMsg?.('this is msg')
  }
  return <button onClick={handleClick}>send msg</button>
}

function App() {
  // 2.2.b.需要单独注解匹配的参数类型
  const getMsg = (msg: string) => console.log(msg, 2)

  return (
    <>
      this is app
      {/* 2.1.绑定prop时如果绑定内联函数直接可以推断出参数类型 */}
      <Son onGetMsg={(msg) => console.log(msg, 1)} />
      {/* 2.2.a */}
      <Son onGetMsg={getMsg} />
    </>
  )
}

export default App
