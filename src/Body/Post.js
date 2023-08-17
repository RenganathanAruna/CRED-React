import React from 'react';
import {FaTrash} from 'react-icons/fa';
import {Link, useParams} from 'react-router-dom';

const Post = ({post,handeldeletepost}) => {

 

  return (
    <div className='post'>
       
              <div className='trashdiv'>
                <Link to={`NewPost/${post.id}`} className='removedecoration'>
                <h3>{post.title}</h3></Link>
                <FaTrash 
                  role='button'
                  onClick={()=>handeldeletepost(post.id)}
                  style={{color:'orange'}}
                />
              </div>
              <p className='Post_date'>{post.datetime}</p>
              <p className='post_body'>{
                (post.body).length>25?
                (`${(post.body).slice(0,25)}...`):
                (post.body)
                }
              </p>
        
    </div>
  )
}


export default Post