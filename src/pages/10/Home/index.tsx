import { Tabs } from 'antd-mobile'
import { useEffect, useState } from 'react'

import { fetchChannelAPI, type ChannelItem } from '@/apis/10/list'

import './index.css'

const Home = () => {
  const [channels, setChannels] = useState<ChannelItem[]>([])

  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await fetchChannelAPI()
        setChannels(res.data.data.channels)
      } catch (err) {
        throw new Error('fetch channel error')
      }
    }
    getChannels()
  }, [])

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
