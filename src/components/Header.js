import React from 'react'
import './Header.css'
import '../icons/logo1.png'
function Header() {
    return (
        <div className='header__container'>
            <img src="https://img.icons8.com/external-emojis-because-i-love-you-royyan-wijaya/32/000000/external-angry-fluorescent-adolescent-emojis-because-i-love-you-royyan-wijaya-20.png" className='header__container__logo' alt='logo'/>
            <div className='header__container__title'>
                <h1>Get It Done!</h1>
                <h2>taskmanaging todo's list</h2>
            </div>
        </div>
    )
}

export default Header
