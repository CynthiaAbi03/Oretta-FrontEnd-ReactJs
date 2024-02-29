import React from 'react'
import './SecondNavbar.css';
import search_icon from '../../Assests/Images/search_icon.png'

const SecondNavBar = () => {
  return (
    <div className='secondnavbar'>
        <div className="logotext">
            Oretta
        </div>
        <div className="searchbar">
            <div className="searchbar-container">
                <input type="text" name="" id="input" placeholder='Recherchez' />
                <button><img className='search-icon' src={search_icon} alt="" /></button>
            </div>
        </div>
        <div className="navigation">
            <a href='/journal'>Journal</a>
            <a href='/discussion'>Forum de Discussion</a>
        </div>
    </div>
  )
}

export default SecondNavBar