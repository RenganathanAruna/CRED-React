import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from 'react-router-dom';
import { useState } from 'react';
import NavBar from '../Header/NavBar';
import { useContext } from 'react';
import UserContext from '../UserContext';
import { FaUserCircle } from 'react-icons/fa';
const NewPost = ({handelsubmitnewpost,title,settitle,newpost,setnewpost,post,handelsubmitupdatepost}) => {
  
  const { id } = useParams();

  const filteredPost = post.find(p => (p.id).toString() === id);

  const [updatetitle,setupdatetitle] = useState
  (filteredPost ? filteredPost.title : '');
  const [updatebody,setupdatebody] = useState
  (filteredPost ? filteredPost.body : '');

  const userdetails = useContext(UserContext);

  return (

    <div className=' AllPage_heightmin'>
      <NavBar/>
      <div className='LoginUser'>
        <h3>{userdetails.userDetails.Name}</h3>
        <FaUserCircle className='usericon'/>
      </div> 
      <div className='NewPost_ContentWrapper'>
        <div className='NewPost_form_wrapper'>
          {
            !filteredPost && <>
              <form className='AddNewPost' onSubmit={handelsubmitnewpost}>
                <div>
                    <strong>
                      Title : 
                    </strong>
                    <input
                      id='post_id'
                      type='text'
                      required
                      value={title}
                      placeholder='Enter the title of the post'
                      className='form-control'
                      onChange={(e) => settitle(e.target.value) }
                    />
                </div>
                <div>
                    <strong>
                      Post : 
                    </strong>
                    <textarea
                      id='post_id'
                      type='text'
                      required
                      value={newpost}
                      placeholder='Enter the details to post'
                      className='form-control'
                      onChange={(e) => setnewpost(e.target.value) }
                    />
                </div>
                <div>
                  <button type='submit' className='btn btn-success btn-size'>Post</button>
                </div>
              </form>
            </>

          }
          {
            filteredPost && <>
            <form className='UpdatePost' onSubmit={(e) => handelsubmitupdatepost(e,updatetitle,updatebody,filteredPost.id)}>
              <div>
                  <strong>
                    Title : 
                  </strong>
                  <input
                    id='post_id'
                    type='text'
                    required
                    value={updatetitle}
                    placeholder='Enter the title of the post'
                    className='form-control'
                    onChange={(e) => setupdatetitle(e.target.value) }
                  />
              </div>
              <div>
                  <strong>
                    Post : 
                  </strong>
                  <textarea
                    id='post_id'
                    type='text'
                    required
                    value={updatebody}
                    placeholder='Enter the details to post'
                    className='form-control'
                    onChange={(e) => setupdatebody(e.target.value) }
                  />
              </div>
              <div>
                <button type='submit' className='btn btn-success btn-size'>Save Post</button>
              </div>
            </form>
          </>
          }
        </div>
      </div>
    </div>
  )
}


export default NewPost