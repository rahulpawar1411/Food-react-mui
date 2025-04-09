import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Typography,Container } from '@mui/material'

const Contect = () => {
  return (
    <Layout>
            <Box sx={{p:"20px", textAlign:'center','& h3':{mt:5} ,'& p':{m:5,px:12} ,
          '@media (max-width: 600px)':{
            pt:"0",
            'h3':{mt:3,fontSize:"7vw",},
            '& p':{px:0,mx:0}
          }}} >
              <Typography  variant='h3' >Contect My Restaurant</Typography>
              <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt debitis 
                officia iusto obcaecati Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt debitis 
                officia iusto obcaecati Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt debitis 
                officia iusto obcaecati Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt debitis 
                officia iusto obcaecati Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt debitis 
                officia iusto obcaecati voluptatibus quidem vel sint accusantium similique? Suscipit et, id quasi quod nam odio. Eum magnam doloremque inventore a reprehenderit veniam ipsa autem explicabo, sunt, magni, accusamus nulla dolorem sequi neque at cupiditate? Aut ullam quis molestiae autem temporibus voluptatem corrupti accusamus? Animi.
              </p>
              <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt debitis 
                officia iusto obcaecati Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt debitis 
                officia iusto obcaecati Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt debitis 
                officia iusto obcaecati Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt debitis 
                officia iusto obcaecati Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt debitis 
                officia iusto obcaecati voluptatibus quidem vel sint accusantium similique? Suscipit et, id quasi quod nam odio. Eum magnam doloremque inventore a reprehenderit veniam ipsa autem explicabo, sunt, magni, accusamus nulla dolorem sequi neque at cupiditate? Aut ullam quis molestiae autem temporibus voluptatem corrupti accusamus? Animi.
              </p>
            </Box>      
    </Layout>
  )
}

export default Contect