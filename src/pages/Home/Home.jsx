import './home.scss';
import Resume from '../../assets/resume/BfinetCV.pdf';
import GithubLogo from '../../assets/images/GithubLogo.png';
import linkedInLogo from '../../assets/images/In.png'

function Home() {


    return (
        <div className='presentation'>
            <div className='presentation__text'>
                <p className='presentation__firstLine'>Bienvenue ! Moi c'est <span className='presentation__firstName'>Benoît</span></p>
                <div className='presentation__secondLine'>
                    <p>Développeur front-end JS et React</p>
                    <p>Ce site est en cours de réalisation, n'hésitez pas à revenir régulièrement !</p>
                </div>
                <div>
                    <form method="get" action={Resume} target="_blank">
                        <button className='buttonDownload' type="submit">Téléchargez mon CV</button>
                    </form>
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
