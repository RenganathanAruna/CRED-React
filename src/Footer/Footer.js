import React from 'react'

const Footer = () => {
  const year = new Date();
  return (
    <div className='footer'>
        <div className='footer-div'>
          <h3>Copyrights &copy; {year.getFullYear()}</h3>
          </div>
    </div>
  )
}

export default Footer