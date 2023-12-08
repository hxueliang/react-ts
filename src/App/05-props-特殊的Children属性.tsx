/**
 * 05-props-特殊的Children属性
 */

type Props = {
  className: string
  children: React.ReactNode
  /**
   * 注解之后，
   * children可以是多种类型：
   * React.ReactElement
   * React.ReactFragment
   * React.ReactPortal
   * string
   * number
   * boolean
   * null
   * undefined
   */
}

function Button(prpos: Props) {
  const { className, children } = prpos
  return <button className={className}>{children}</button>
}

function App() {
  return (
    <>
      this is app
      <Button className='btn'>
        {/* <span>click me</span> */}
        click me
      </Button>
    </>
  )
}

export default App
