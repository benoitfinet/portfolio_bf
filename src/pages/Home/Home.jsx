import './home.scss';
import Resume from '../../assets/resume/BFINETCV.pdf'

function Home() {


    return (
        <div className='presentation'>
            <div className='presentation__text'>
                <p className='presentation__firstLine'>Bienvenue, je suis <span className='presentation__firstName'>Benoît</span></p>
                <div className='presentation__secondLine'>
                    <p>Développeur front-end JS et React</p>
                    <p>Créteil, France</p>
                </div>
                <div>
                    <form method="get" action={Resume} target="_blank">
                        <button className='buttonDownload' type="submit">Téléchargez mon CV</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home
