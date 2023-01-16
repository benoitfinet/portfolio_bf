import './home.scss';
import GithubLogo from '../../assets/images/GithubLogo.png';
import linkedInLogo from '../../assets/images/In.png';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

function Home() {


    return (
        <div className='presentation'>
            <div className='presentation__text'>
                <p className='presentation__firstLine'>Bienvenue ! Je suis <span className='presentation__firstName'>Benoît</span></p>
                <div className='presentation__secondLine'>
                    <p>Développeur front-end JS et React</p>
                    <p>Ce site est en cours de réalisation, n'hésitez pas à revenir régulièrement !</p>
                    <p>Dernière MAJ : 16/01/2023</p>
                </div>
                <div>
                    <Link to='portFolio'>
                        <Button type="undefined" text="Portfolio"></Button>
                    </Link>
                </div>
            </div>
            <footer className='presentation__footer'>
                <a href="https://github.com/benoitfinet" target="_blank" rel="noreferrer">
                    <img className='presentation__footer--logo' src={GithubLogo} alt="Logo Github"></img>
                </a>
                <a href="https://www.linkedin.com/in/benoitfinetdev/" target="_blank" rel="noreferrer">
                    <img className='presentation__footer--logo' src={linkedInLogo} alt="Logo LinkedIn"></img>
                </a>
            </footer>
        </div>
    )
}

export default Home
