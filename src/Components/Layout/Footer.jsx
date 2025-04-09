import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
   <>
   <Box sx={{bgcolor:'#1A1A19' ,color:'#fff', textAlign:"center" , p:2}}>
    <Typography variant='h6' sx={{'@media(max-width:600px)':{
        fontSize:'1rem'
    }}}>
        All Rights reserved &copy; ....
    </Typography>
   </Box>
   </>
  )
}

export default Footer