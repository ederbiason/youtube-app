import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { Link } from "react-router-dom"

import { DataInterface } from "../types/interface"

import { demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoProfilePicture } from '../utils/contants';

interface IProps {
    video: DataInterface
}

export const VideoCard = ({ video: { id: { videoId }, snippet } }: IProps) => {
  return (
    <Card
      sx={{
        width: { md: '320px', xs: '100%' },
        boxShadow: 'none', 
        borderRadius: '0'
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          about={snippet?.title} 
          sx={{
            width: 358,
            height: 180
          }} 
        />
      </Link>

      <CardContent 
        sx={{
          backgroundColor: '#1e1e1e', 
          height: '106px'
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography 
            variant="subtitle1" 
            fontWeight="bold"
            color="#fff"
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography 
            variant="subtitle2" 
            fontWeight="bold"
            color="gray"
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}