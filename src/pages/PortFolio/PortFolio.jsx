import './portFolio.scss';
import React, { useState } from 'react';
import CardsVitrine from '../../components/Cards/CardsVitrine';
import CardsArchive from '../../components/Cards/CardsArchive';


function PortFolio() {

    const [vitrine, setVitrine] = useState(true)

    return (
        <div className='portfolio'>
            <div className='portfolio__content'>
                <div className='portfolio__select'>
                    <div className={`portfolio__select--choice portfolio__select--choice1 + ${vitrine ? "portfolio__select--active" : null}`}
                        onClick={() => vitrine ? null : setVitrine(true)}
                    >
                        <p>Derniers projets</p>
                    </div>
                    <div className={`portfolio__select--choice portfolio__select--choice2 + ${!vitrine ? "portfolio__select--active" : null}`}
                        onClick={() => vitrine ? setVitrine(false) : null}
                    >
                        <p>Archives</p>
                    </div>
                </div>
                {vitrine ?
                    <CardsVitrine />
                    :
                    <CardsArchive />
                }
            </div>
        </div>
    )
}

export default PortFolio