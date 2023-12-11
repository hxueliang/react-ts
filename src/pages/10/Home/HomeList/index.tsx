import { Image, InfiniteScroll, List } from 'antd-mobile'

import { useList } from './useList'

type Props = {
  channelId: string
}

const HomeList = (props: Props) => {
  const { channelId } = props
  const { articlesRes, hasMore, loadMore } = useList(channelId)

  return (
    <>
      <List>
        {articlesRes.results.map((item) => (
          <List.Item
            key={item.art_id}
            prefix={
              <Image
                src={item.cover.images?.[0]}
                style={{ borderRadius: 20 }}
                fit='cover'
                width={40}
                height={40}
              />
            }
            description={item.pubdate}
          >
            {item.title}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={50} />
    </>
  )
}

export default HomeList
