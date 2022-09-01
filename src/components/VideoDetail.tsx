import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Stack, Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { ChannelInterface } from '../types/ChannelInterface'
import { DataInterface } from '../types/interface'

import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'


export const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState<ChannelInterface>()
  const [videos, setVideos] = useState<DataInterface[]>([])

  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statisctics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id])

  if (!videoDetail?.snippet) return <Box>'Loading...'</Box>

  const { snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount }
  }: ChannelInterface = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
      >
        <Box flex={1}>
          <Box
            sx={{
              width: '100%',
              position: 'sticky',
              top: '86px'
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="#fff"
              variant='h6'
              fontWeight='bold'
              p={2}
            >
              {title}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: '#fff'
              }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant='subtitle2' color="#fff">
                  {channelTitle}
                  <CheckCircle
                    sx={{
                      fontSize: '12px',
                      color: 'gray',
                      ml: '5px'
                    }}
                  />
                </Typography>
              </Link>

              <Stack
                direction="row"
                gap='20px'
                alignItems='center'
              >
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7
                  }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7
                  }}
                >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems='center'
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}