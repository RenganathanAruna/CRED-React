import React from 'react';
import Feed from '../Body/feed';

const Home = ({post,handeldeletepost}) => {
  return (
    <div className='Home_ContentWrapper AllPage_heightmin'>
      <div className='Home'>
        {post.length?(<Feed post={post} handeldeletepost={handeldeletepost}/>):
        (
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'68vh'}}>
            <strong>There is no post to display...</strong>
          </div>
        )}
      </div>
    </div>
    
  )
}

export default Home