import React from 'react';
import Post from './Post';

const feed = ({post,handeldeletepost}) => {
  return (
    <div className='feed'>
        <h1>Your Posts.......</h1>
        <div className='post_div'>
          {
            post.map(post => 
              <Post key={post.id} post={post} handeldeletepost={handeldeletepost}/>)
          }
        </div>
    </div>
  )
}

export default feed