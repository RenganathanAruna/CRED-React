import React from 'react'
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';

const NavBar = ({search,setSearch}) => {
    const location = useLocation();
    const PageName = location.pathname === '/';

    return (
            <nav className='NavBar'>

                {PageName &&

                   <div className='Navbar_search_list'>
                        <form className='searchForm' onSubmit={(e)=>
                        e.preventDefault()}>

                            <strong>Search Post : </strong>
                            <input 
                            type="text"
                            id="search" 
                            placeholder="Search posts"
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                            className='searchinput'
                            />

                        </form>
                        <ul className='Navbar_ul'>
                            <li><Link to="/" className='removedecoration'>Home</Link></li>
                            <li><Link to="/NewPost" className='removedecoration'>New Post</Link></li>
                            <li><Link to="/About" className='removedecoration'>About</Link></li>
                        </ul>
                   </div> 

                }

                {!PageName &&
                    <div className='Navbar_list'>
                        <ul className='Navbar_ul'>
                            <li><Link to='/Home' className='removedecoration'>Home</Link></li>
                            <li><Link to="/NewPost" className='removedecoration'>New Post</Link></li>
                            <li><Link to="/About" className='removedecoration'>About</Link></li>
                        </ul>
                    </div>
                }
                
            </nav>
   
    )
}

export default NavBar