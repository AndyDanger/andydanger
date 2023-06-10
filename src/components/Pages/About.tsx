import './styles/aboutStyle.css'
import { ReactComponent as StepsSVG } from '../Pages/assets/layered-steps-haikei-trans.svg';


import { useEffect, useState } from "react";


export function About() {

    useEffect(() => {

    }, [])

    document.title = "Andy Danger Portfolio";

    return (
        <div>
            <div className="container steps">
                <section className="background">
                    <div className="content-wrapper">
                        <p className="content-title">About Page</p>
                        <p className="content-subtitle">Scroll down!</p>
                    </div>
                </section>
                <section className="background">
                    <div className='wrapper'>
                        <StepsSVG />
                        <div></div>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-title">Amazon forest</p>
                        <p className="content-subtitle">All the rendered pixels are super reall</p>
                    </div>
                </section>
                <section className="background">
                    <div className='wrapper'>
                        <StepsSVG />
                        <div></div>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-title">Fireflies.</p>
                        <p className="content-subtitle">Long-exposure photo of fireflies in a darkened Japanese forest</p>
                    </div>
                </section>
                <section className="background">
                    <div className='wrapper'>
                        <StepsSVG />
                        <div></div>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-title">LAST SLIDE</p>
                        <p className="content-subtitle">Long-exposure photo of fireflies in a darkened Japanese forest</p>
                    </div>
                </section>
            </div>
        </div>
    );
}