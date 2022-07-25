import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        });
    }, []);
  return (
    <div className={`nav ${show && "navBlack"}`}>
        <img className='navLogo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png'
        alt='Netflix Logo'/>
        <img className='navAvatar'
        src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
        alt='Netflix Logo'/>
    </div>
  )
}

export default Nav