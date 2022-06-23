import React from 'react'

function NavBar({hideImage, logIn}) {
  return (
    <nav >
      <div className='nav-left'>
        <div className='logo'><img src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png" alt="" /></div>
        <div className='logo-text'>The Free Coding Bootcamp</div>
      </div>
      <div className='nav-right'>
        <ul>
          <li>Home</li>
          <li>Intensive Bootcamp</li>
          <li>Sponsors & Partners</li>
          <li>Graduates</li>
          <li>Careers</li>
          <li>Blog</li>
          <button className='nav-button' onClick={hideImage}>{logIn}</button> 
        </ul>   
      </div>

    </nav>
  )
}

export default NavBar