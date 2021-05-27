import React, { Component } from 'react'



export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-center bg-secondary">
                    <h1>Hello World!</h1>                 
                </div>
                <div className="parallax"></div>
                <div className="jumbotron text-center bg-secondary">
                    <h1>I am a normal programmer</h1>
                </div>
            </div>
        )
    }
}
