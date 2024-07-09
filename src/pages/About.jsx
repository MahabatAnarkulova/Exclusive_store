import { Box, Container } from '@mui/material'
import SideImage from "../assets/Side-Image.png"

import React from 'react'

const About = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{display:"flex", gap:"69px", alignItems:"center", marginTop:"140px"}}>
          <div style={{width:"653px", height:"336px"}}>
            <h2 style={{fontSize:"54px", fontWeight:"600", marginBottom:"40px"}}>Our story </h2>
            {/* <div style={{width}}> */}
            <p style={{paddingBottom:"24px", fontWeight:'400', fontSize:'16px'}}>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            {/* </div> */}
          </div>

          <div>
            <img src={SideImage} alt="" />
          </div>
        </Box>
      </Container>
    </div>
  )
}

export default About