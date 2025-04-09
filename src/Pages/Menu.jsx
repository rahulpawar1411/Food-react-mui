import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../data/data'

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:'flex',flexWrap:"wrap",justifyContent:"center"}}>
        {MenuList.map((menu)=>{
          return (<Card sx={{maxWidth:"400px",m:3, }}>
            <CardActionArea>
              <CardMedia sx={{maxHeight:'400px' }} component={'img'} src={menu.image}  />
              <CardContent>
                <Typography variant='h5' >
                  {menu.name}
                </Typography>
                <Typography variant='p' >
                  {menu.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>)
        })}
      </Box>
    </Layout>
  )
}

export default Menu