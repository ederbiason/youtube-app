import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import { Feed, VideoDetail, ChannelDetail, SearchFeed, Navbar } from './components';

const App = () => (
      <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/video/:id" element={<ChannelDetail />} />
            <Route path="/video/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
)

export default App