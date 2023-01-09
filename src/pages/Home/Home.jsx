import './home.scss';
import Resume from '../../assets/resume/BfinetCV.pdf'

function Home() {


    return (
        <div className='presentation'>
            <div className='presentation__text'>
                <p className='presentation__firstLine'>Greetings, I am <span className='presentation__firstName'>Benoît</span></p>
                <div className='presentation__secondLine'>
                    <p>React and JS developer</p>
                    <p>based in Créteil, France</p>
                </div>
                <div>
                    <form method="get" action={Resume} target="_blank">
                        <button className='buttonDownload' type="submit">Download Resume</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home
