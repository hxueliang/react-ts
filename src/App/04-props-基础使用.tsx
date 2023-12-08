/**
 * 04-props-基础使用
 *
 * 为组件prop添加类型
 * 本质是给函数的参数做类型注解
 * 可以使用type对象类型或者interface接口来做注解
 */

// type Props = {
//   className: string
//   title?: string
// }

interface Props {
  className: string
  title?: string
}

function Button(props: Props) {
  const { className } = props
  return <button className={className}>click me</button>
}

function App() {
  return (
    <>
      this is app
      {/* <Button></Button> */}
      {/* 类型 "{}" 中缺少属性 "className"，但类型 "Props" 中需要该属性。 */}
      {/* <Button id='btn'></Button> */}
      {/* 不能将类型“{ id: string; }”分配给类型“IntrinsicAttributes & Props”。 类型“IntrinsicAttributes & Props”上不存在属性“id”。 */}
      <Button className='btn'></Button>
    </>
  )
}

export default App
