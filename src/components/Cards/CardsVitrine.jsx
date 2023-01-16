import './cards.scss';
import React from 'react';
import DatasVitrine from '../../assets/datas/portfolioVitrine.json';
import GithubLogo from '../../assets/images/GithubLogo.png';
import WebLogo from '../../assets/images/web.png';


function CardsVitrine() {

    const dataVitrine = DatasVitrine

    return (
        <div className='content'>
            {dataVitrine && dataVitrine.map(({ title, image, origin, description, linkGithub, linkWebsite, index, listTech }) => (
                <div key={title}>
                    {index % 2 === 0 ?
                        <div className='card'>
                            <div className='card__left'>
                                <img alt='test' src={image} />
                            </div>
                            <div className='card__right'>
                                <p className='card__source'>{origin}</p>
                                <p className='card__title'>{title}</p>
                                <p className='card__text'>{description}</p>
                                <div className='card__list'>
                                    {listTech && listTech.map((tech) => {
                                        return <p key={tech[0]}>{tech}</p>
                                    })}
                                </div>
                                <div className='card__links'>
                                    <a href={linkGithub} target="_blank" rel="noreferrer">
                                        <img src={GithubLogo} alt='Github logo' />
                                    </a>
                                    <a href={linkWebsite} target="_blank" rel="noreferrer">
                                        <img src={WebLogo} alt='External Link' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='card'>
                            <div className='card__rightInvert'>
                                <p className='card__source'>{origin}</p>
                                <p className='card__title'>{title}</p>
                                <p className='card__text'>{description}</p>
                                <div className='card__listInvert'>
                                    {listTech && listTech.map((tech) => {
                                        return <p key={tech[0]}>{tech}</p>
                                    })}
                                </div>
                                <div className='card__linksInvert'>
                                    <a href={linkGithub} target="_blank" rel="noreferrer">
                                        <img src={GithubLogo} alt='Github logo' />
                                    </a>
                                    <a href={linkWebsite} target="_blank" rel="noreferrer">
                                        <img src={WebLogo} alt='External Link' />
                                    </a>
                                </div>
                            </div>
                            <div className='card__left'>
                                <img alt='test' src={image} />
                            </div>
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}

export default CardsVitrine