import React from 'react'
import "./MenuBurger.css"

function MenuBurger() {
  return (
    <div className='menu__burger-links'>
        <nav className='menu__burger-nav'>
                    <ul className='menu__burger-list'>
                        <li className='menu__burger-item'><a className='menu__burger-link' href="#">ГЛАВНАЯ</a></li>
                        <li className='menu__burger-item'><a className='menu__burger-link' href="#">О НАС</a></li>
                        <li className='menu__burger-item'><a className='menu__burger-link' href="#">РАСПИСАНИЕ ИГР</a></li>
                        <li className='menu__burger-item'><a className='menu__burger-link' href="#">КОНТАКТЫ</a></li>
                    </ul>
        </nav>
    </div>
  )
}

export default MenuBurger