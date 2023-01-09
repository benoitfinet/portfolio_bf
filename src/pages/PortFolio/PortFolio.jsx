import './portFolio.scss';
import React from 'react';
import Datas from '../../assets/datas/portfolio.json';
import GithubLogo from '../../assets/images/GithubLogo.png';
import WebIcon from '../../assets/images/web.png';


function PortFolio() {

    const data = Datas

    return (
        <div className='portfolio'>
            <div className='cardList'>
                {data && data.map(({ title, image, description, linkGithub, linkWebsite }) => (
                    <div key={title} className="card" style={{
                        backgroundImage: `url(${image})`
                    }} rel="noreferrer">
                        <div className="inner">
                            <div className='links'>
                                <a href={linkGithub} target="_blank" rel="noreferrer">
                                    <img src={GithubLogo} alt="Github Logo" className='githubLogo'></img>
                                </a>
                                <a href={linkWebsite} target="_blank" rel="noreferrer">
                                    <img src={WebIcon} alt="Web Icon" className='githubLogo'></img>
                                </a>
                            </div>
                            <h2 className="title">{title}</h2>
                            <p className="subtitle">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PortFolio