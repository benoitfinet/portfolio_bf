import './header.scss'
import { Link } from 'react-router-dom';
import Resume from '../../assets/resume/BfinetCV.pdf';
import Button from '../Button/Button';

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
                    <p className='navigation header__contact'>Contact</p>
                </Link>
                <Link to="/portFolio">
                    <p className='navigation header__portFolio'>Portfolio</p>
                </Link>
                <form method="get" action={Resume} target="_blank" className='header__button'>
                    <Button type="submit" text="Mon CV"></Button>
                </form>
            </div>
        </div>
    )
}

export default Header