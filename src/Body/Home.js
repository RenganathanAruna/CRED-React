import React from 'react';
import Feed from '../Body/feed';
import NavBar from '../Header/NavBar';

const Home = ({post,handeldeletepost,search,setSearch}) => {
  return (
    <div className='AllPage_heightmin'>
      <NavBar/>
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