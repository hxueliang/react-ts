import { Tabs } from 'antd-mobile'

import { useChannels } from './useTabs'
import './index.css'

const Home = () => {
  const { channels } = useChannels()

  return (
    <div className='tabContainer'>
      <Tabs>
        {channels.map(({ id, name }) => (
          <Tabs.Tab title={name} key={id}>
            {name}
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  )
}

export default Home
