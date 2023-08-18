import './App.css';
import {Routes,Route, useNavigate} from 'react-router-dom';
import Home from './Body/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import About from './Body/About';
import NewPost from './Body/NewPost';
import Error from './Body/Error';
import UserDetails from './Body/UserDetails';
import {useEffect, useState } from 'react';
import {format} from 'date-fns';
import UserContext from './UserContext';

function App() {

  const[search,setSearch]= useState('')

  const[post,setPost] = useState([]);

  const [title,settitle]=useState('');

  const [newpost,setnewpost]=useState('');

  const [searchresult,setsearchresult]=useState('');

  const [userDetails,setUserDetails]=useState({
    Name: '',
    Email: ''
  });

  const navigate = useNavigate();

  const handelsubmitnewpost = (e) => {

    e.preventDefault();

    const id = post.length ?
      post[post.length-1].id + 1:
      1;
    
    const datetime = format (new Date(),'MMMM dd,yyyy pp')

    const newPost = {id,title:title,datetime,body:newpost};

    const allPosts = [...post,newPost];

    setPost(allPosts);
    settitle('');
    setnewpost('');
    navigate('/Home');
  }

  const handeldeletepost = (deletepostid)=>{
    const postlist = post.filter(p => p.id !== deletepostid);
    setPost(postlist);
  }

  const handelsubmitupdatepost = (e,updatedtitle,updatedpost,id) =>{
    e.preventDefault();
    const datetime = format (new Date(),'MMMM dd,yyyy pp')
    post[id-1].body=updatedpost;
    post[id-1].title=updatedtitle;
    post[id-1].datetime=datetime;
    navigate('/Home');
  }


  const handelsumbituserdeatils = (e) =>{
      e.preventDefault();
      navigate('/Home');
  }

  useEffect(()=>{
    const filteredResults =
      post.filter((p) => 
      (
     ((p.body).toLocaleLowerCase()).includes
     (search.toLocaleLowerCase()) 
      )
     || 
     ( ((p.title).toLocaleLowerCase())
     .includes(search.toLocaleLowerCase())
     )
     );

    setsearchresult(filteredResults.reverse());
  },[post,search]);

  return (
      <div className="App">

        <div className='Header'>
          <Header title="Welcome To Dom's Social Media App"/>
        </div>
        <UserContext.Provider value={{ userDetails, setUserDetails }}>
          <Routes>

              <Route path='/' element={<UserDetails
                  userDetails={userDetails}
                  setUserDetails={setUserDetails}
                  handelsumbituserdeatils={handelsumbituserdeatils}
              />}
              />

              <Route path='/Home' element={
                  <Home post={searchresult} 
                  handeldeletepost={handeldeletepost}
                  search={search}
                  setSearch={setSearch}
                  />
                  } 
              />

              <Route path='About' element ={<About/>} />

              <Route path='NewPost'>

                  <Route index
                  element ={<NewPost 
                  handelsubmitnewpost={handelsubmitnewpost}
                  title={title}
                  settitle={settitle}
                  newpost={newpost}
                  setnewpost={setnewpost}
                  post={post}/>
                  } />

                  <Route path=':id' element={<NewPost 
                    post={post}
                    handelsubmitupdatepost={handelsubmitupdatepost}/>
                  }/>

              </Route>

              <Route path='*' element={<Error/>} />

          </Routes>
        </UserContext.Provider>

        <div className='Footer'>
          <Footer/>
        </div>
      </div>
  );
}

export default App;
