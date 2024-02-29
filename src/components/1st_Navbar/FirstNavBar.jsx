import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './FirstNavbar.css'

const FirstNavBar = () => {

    const menuRef = useRef()
    const menuList = useRef()
    const headerRef = useRef()

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('active')
        headerRef.current.classList.toggle('active')
        menuList.current.classList.toggle('navbar_visible')
    }

  return (
    <div className='firstnavbar' ref={headerRef}>
        
       

            <div className="logo">
                <div>Oretta</div>
            </div>

            <nav ref={menuList}>
                <ul>
                    <li><a href="#footer">À propos</a></li>
                    <li><a href="#footer">Aide</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>

                <div className="login-button">
                    <Link to='/connection'><button>Connexion</button></Link>
                </div>
            </nav>
            
            {/* <div className="login-button">
                <button>Connexion</button>
            </div> */}

            <div className="menu-bar" ref={menuRef} onClick={dropdown_toggle}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
       

    </div>
  )
}

export default FirstNavBar