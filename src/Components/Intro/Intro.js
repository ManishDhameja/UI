import React from 'react'
import './Intro.css'

const Intro = () => {
    return (
        <div className="home" id="home">
            <div className="px-4 py-5 text-center">
                <h1 className ="display-5 fw-bold">We help your buissness</h1>
                <div className ="col-lg-6 mx-auto">
                <p className ="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className ="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type ="button" className ="btn btn-light text-dark btn-lg px-4 gap-3">Learn More</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
