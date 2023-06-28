import './styles/workStyle.css'

import { ReactComponent as PeaksSVG } from '../Pages/assets/layered-peaks-haikei-trans.svg';


import { useEffect, useState } from "react";


export function Work() {

    useEffect(() => {

    }, [])


    return (

        <div className="container peaks">
            <section className="background">
                <div className="content-wrapper">
                    <p className="content-title">Work</p>
                    <p className="content-subtitle">I've had the pleasure of working for the following companies:</p>
                    <p className="company-logos">
                        <img src={require('../Pages/assets/roi_revolution.png')} />
                        <img src={require('../Pages/assets/relias.png')} />
                        <img src={require('../Pages/assets/elevar.png')} />
                    </p>
                </div>
            </section>
            <section className="background">
                <div className='wrapper'>
                    <PeaksSVG />
                    <div></div>
                </div>
                <div className="content-wrapper">
                    <p className="content-title">Clients</p>
                    <p className="content-subtitle">TODO</p>
                </div>
            </section>
            <section className="background">
                <div className='wrapper'>
                    <PeaksSVG />
                    <div></div>
                </div>
                <div className="content-wrapper">
                    <p className="content-title">A/B Testing</p>
                    <p className="content-subtitle">TODO</p>
                </div>
            </section>
            <section className="background">
                <div className='wrapper'>
                    <PeaksSVG />
                    <div></div>
                </div>
                <div className="content-wrapper">
                    <p className="content-title">Personal</p>
                    <p className="content-subtitle">Real-time stats for live, professional League of Legends games</p>
                    <img src={require('../Pages/assets/esports.jpg')} />
                    <a href="https://andydanger.github.io/live-lol-esports/#/">View Website</a>
                </div>
            </section>
        </div>
    );
}