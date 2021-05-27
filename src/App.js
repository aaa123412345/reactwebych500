import React, { Component } from 'react'
import {Route} from'react-router-dom'

import Resume from "./pages/Resume/Resume"
import Nav_bar from "./component/Nav_bar/Nav_bar"
import Header from './component/Header/Header'
import Aboutme from "./pages/Aboutme/Aboutme"
import Showcase from "./pages/Showcase/Showcase"

import Webinfo from "./pages/Webinfo/Webinfo"

export default class App extends Component {  
    render() {
        return (
            <div>
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-md-12">
                            <Header/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Nav_bar />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Route path="/webinfo" component={Webinfo}/>
                            <Route path="/about" component={Aboutme}/>
                            <Route path="/resume" component={Resume}/>
                            <Route path="/showcase" component={Showcase}/>
                        </div>
                    </div>
                </div>                            
           </div>
        )
    }
}
