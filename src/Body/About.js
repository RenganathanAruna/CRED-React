import React from 'react';
import NavBar from '../Header/NavBar';
import { useContext } from 'react';
import UserContext from '../UserContext';
import { FaUserCircle } from 'react-icons/fa';

const About = () => {
  const userdetails = useContext(UserContext);
  return (
    <div className='AllPage_heightmin'>
      <NavBar/>
      <div className='LoginUser'>
        <h3>{userdetails.userDetails.Name}</h3>
        <FaUserCircle className='usericon'/>
      </div> 
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'68vh'}}>
          <strong>This web app is developed for the learing purpose</strong>
          <h2>{userdetails.Name}</h2>
      </div>
    </div>
  )
}

export default About