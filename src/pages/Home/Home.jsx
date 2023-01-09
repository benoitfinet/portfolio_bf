import './home.scss';

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
                    <button>Download Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Home
