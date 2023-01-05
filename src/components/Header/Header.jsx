import './header.scss'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <div className='header'>
            <Link to="/">
                <p className='header__name'>Benoît</p>
            </Link>
            <div className='header__nav'>
                {/* <Link to="/aboutMe">
                    <p className='navigation header__aboutMe'>About me</p>
                </Link> */}
                <Link to="/contactMe">
                    <p className='navigation header__contact'>Contact me</p>
                </Link>
                {/* <Link to="/experience">
                    <p className='navigation header__experience'>Experience</p>
                </Link> */}
                <Link to="/portFolio">
                    <p className='navigation header__portFolio'>Portfolio</p>
                </Link>
            </div>
        </div>
    )
}

export default Header