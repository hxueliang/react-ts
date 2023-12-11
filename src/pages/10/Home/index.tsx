import { Tabs } from 'antd-mobile'

import { useChannels } from './useTabs'
import HomeList from './HomeList'
import './index.css'

const Home = () => {
  const { channels } = useChannels()

  return (
    <div className='tabContainer'>
      <Tabs defaultActiveKey={'0'}>
        {channels.map(({ id, name }) => (
          <Tabs.Tab title={name} key={id}>
            <div className='listContainer'>
              <HomeList channelId={'' + id} />
            </div>
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  )
}

export default Home
