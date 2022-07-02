import {useEffect, useState} from 'react';
import {
  Container,
  Content,
  HeaderInstagram,
  Header,
  Title,
  Subtitle,
  Feed,
  Post,
  Box
} from './styles';

type InstagramProps = {
  data: FeedItem[];
};

type FeedItem = {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
};

export function Instagram({data}: InstagramProps) {
  const [limit, setLimit] = useState(0);

  // useEffect(() => {
  //   console.log(limit);
  // }, [limit]);

  return (
    <Container id="instagram">
      <Content className="reveal">
        <HeaderInstagram>
          <Header>
            <Title>Instagram</Title>
            <Subtitle>Últimos posts</Subtitle>
          </Header>
        </HeaderInstagram>
        <Feed>
          {data.map((item: FeedItem) => {
            if (
              item.media_type === 'CAROUSEL_ALBUM' ||
              item.media_type === 'IMAGE'
            ) {
              return (
                <Box key={item.id}>
                  <a
                    href={item.permalink}
                    style={{cursor: 'pointer'}}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Post src={item.media_url} />
                  </a>
                </Box>
              );
            }
          })}
        </Feed>
      </Content>
    </Container>
  );
}
