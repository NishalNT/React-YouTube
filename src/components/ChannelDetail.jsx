import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utils/fetchFromAPI';


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)  => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)  => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: 'linear-gradient(184deg, rgba(241,254,254,1) 0%, rgba(3,0,255,1) 100%)',
            zIndex: 10,
            height: '300px'
          }}
        />
          <ChannelCard channelDetail={channelDetail} marginTop="-125px" />
      </Box>
      <Box display="flex" p="2">
          <Box sx={{ mr: { sm: '100px' } }} />
            <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail