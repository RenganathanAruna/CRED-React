import React from 'react';
import NavBar from '../Header/NavBar';

const About = () => {
  return (
    <div className='AllPage_heightmin'>
      <NavBar/>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'68vh'}}>
          <strong>This web app is developed for the learing purpose</strong>
      </div>
    </div>
  )
}

export default About