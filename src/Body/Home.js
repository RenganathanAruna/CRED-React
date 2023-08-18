import React from 'react';
import Feed from '../Body/feed';
import NavBar from '../Header/NavBar';
import { useContext } from 'react';
import UserContext from '../UserContext';
import { FaUserCircle } from 'react-icons/fa';
const Home = ({post,handeldeletepost,search,setSearch}) => {
  const userdetails = useContext(UserContext);
  console.log(userdetails)
  console.log(userdetails.userDetails.Name)
  return (
    
    <div className='AllPage_heightmin'>
      <NavBar search={search} setSearch={setSearch}/>
      <div className='LoginUser'>
        <h3>{userdetails.userDetails.Name}</h3>
        <FaUserCircle className='usericon'/>
      </div> 
      <div className='Home_ContentWrapper'>
        <div className='Home'>
          {post.length?(<Feed post={post} handeldeletepost={handeldeletepost}/>):
          (
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'68vh'}}>
              <strong>There is no post to display...</strong>
            </div>
          )}
        </div>
      </div>
    </div>
    
  )
}

export default Home