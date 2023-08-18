import React from 'react';


const Header = ({title}) => {
  
  return (
    <div className='header'>
        <div className='heading-div'><h1>{title}</h1></div>
    </div>
  )
}

export default Header