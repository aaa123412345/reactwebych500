import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav_bar extends Component {
    render() {
        return (        
            <div id="navbar_top"> 
                <nav className="navbar navbar-expand-lg navbar-light bg-primary" >
                    <Link className="navbar-brand text-light" to="/webinfo" >Ych500's website</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <Link className="nav-item nav-link active text-light" to="/about">About ME </Link>
                        <Link className="nav-item nav-link text-light" to="resume">Resume</Link>
                        <Link className="nav-item nav-link text-light" to="showcase">ShowCase</Link>
                        
                        </div>
                    </div>
                </nav>      
                       
            </div>
        )
    }
}
