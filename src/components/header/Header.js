import './Header.css';
import Logo from '../../assets/user-avatar.svg'
import Arrow from '../../assets/arrow.svg'

function Header() {
    return (
        <header className='header'>
            <div className='title_wrapper'>
                <h1 className='title'>Awesome Kanban Board</h1>
            </div>
            
            <div className='logo_wrapper'>
                <img className='avatar' src={Logo} alt=''/>
                <img className='arrow' src={Arrow} alt=''/>
            </div>

        </header>
    )
}

export default Header;