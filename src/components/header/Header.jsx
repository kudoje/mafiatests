import React, { useState } from 'react'
import "./Header.css"
import Hamburger from 'hamburger-react'
import MenuBurger from './MenuBurger';




function Header() {
    const [openMenu, onOpenMenu] = useState(false);

    const onToggle = (toggled) => {
    onOpenMenu(toggled)
    }


  return (
    <div className='header'>
        <div className='header__container'>
            <div className='container'>
                <div className='header__logo'><a className='header__logo-link' href="#">Logotype</a></div>
                <div className='menu__toggle'><Hamburger onToggle={onToggle} color='#a22c29' /></div>
                <div className='nav__button'>
                <nav className='header__menu menu'>
                    <ul className='menu__list'>
                        <li className='menu__item'><a className='menu__link' href="#">ГЛАВНАЯ</a></li>
                        <li className='menu__item'><a className='menu__link' href="#">О НАС</a></li>
                        <li className='menu__item'><a className='menu__link' href="#">РАСПИСАНИЕ ИГР</a></li>
                        <li className='menu__item'><a className='menu__link' href="#">КОНТАКТЫ</a></li>
                    </ul>
                </nav>

                <div className='sign__button'>
                    <button className='sign__up'>Хочу Поиграть</button>
                    <button className='sign__in'>Вход</button>
                </div>
                </div>
            </div>
        </div>

        {openMenu && <MenuBurger />}
    </div>
  )
}

export default Header