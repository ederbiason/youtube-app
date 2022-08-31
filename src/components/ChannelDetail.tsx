import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { ChannelInterface } from '../types/ChannelInterface'
import { DataInterface } from '../types/interface'

export const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState<DataInterface>()
  const [videos, setVideos] = useState([])

  console.log(channelDetail)

  const { id } = useParams()

  useEffect(() => { 
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  }, [id])

  return (
    <Box
      minHeight='95hv'
    >
      <Box>
        <div 
          style={{
            background: 'linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0, 212, 255, 1) 100%)',
            zIndex: 10,
            height: '300px'
          }}
        /> 
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" /> 
      </Box>
      
      <Box display="flex" p='2'>
        <Box
          sx={{
            mr: { sm: '110px' }
          }}
        />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}