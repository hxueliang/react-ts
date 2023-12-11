import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

import { useDetail } from './useDetail'

const Detail = () => {
  const { detail } = useDetail()

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <NavBar onBack={goBack}>{detail?.title}</NavBar>
      <div
        dangerouslySetInnerHTML={{
          __html: detail?.content || 'loading...',
        }}
      ></div>
    </div>
  )
}

export default Detail
