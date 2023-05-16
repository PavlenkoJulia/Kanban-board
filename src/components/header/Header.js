import './Header.css';
import Logo from '../../assets/user-avatar.svg'
import ArrowDown from '../../assets/arrow.svg'
import ArrowUp from '../../assets/arrow-up.svg'
import { useState } from 'react';

const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false)
    const handleOpenMenu = () => {
        setMenuVisible(!isMenuVisible)
    }

    return (
        <header className='header'>
            <div className='title_wrapper'>
                <h1 className='title'>Awesome Kanban Board</h1>
            </div>
            
            <div className='logo_wrapper' onClick={handleOpenMenu}>
                <img className='avatar' src={Logo} alt=''/>
                {!isMenuVisible && (
                    <img className='arrow' src={ArrowDown} alt='arrowDown'/>
                )}

                {isMenuVisible && (
                    <img className='arrow' src={ArrowUp} alt='arrowUp'/>
                )}
            </div>

            {isMenuVisible && (
                <div className='dropMenu'>
                    <div className='arrowMenu'></div>
                    <div className='dropMenu-links'>
                        <a href='/' className='dropMenu-link'>Profile</a>
                        <a href='/' className='dropMenu-link'>Log Out</a>
                    </div>
                </div>
            )}

        </header>
    )
}

export default Header;