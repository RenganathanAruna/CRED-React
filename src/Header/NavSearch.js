import React from 'react';
import {Link} from 'react-router-dom';

const NavSearch = ({search,setSearch}) => {
  return (
    <nav className='header_navbar'>
            <form className='searchForm' onSubmit={(e)=>
                e.preventDefault()
            }>
                <strong>Search Post : </strong>
                <input 
                type="text"
                id="search" 
                placeholder="Search posts"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                className='searchinput'
                >
                </input>

            </form>

            <ul className='header_ul'>
              <li><Link to="/" className='removedecoration'>Home</Link></li>
              <li><Link to="/NewPost" className='removedecoration'>New Post</Link></li>
              <li><Link to="/About" className='removedecoration'>About</Link></li>
            </ul>
    </nav>
  )
}

export default NavSearch