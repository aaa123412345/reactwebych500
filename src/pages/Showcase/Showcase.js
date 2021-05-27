import React, { Component } from 'react'
import showcase from "../Showcase/Showcase.module.css"

export default class Showcase extends Component {
    render() {
        return (
            <div className ={showcase.container}>
                <ul className={showcase.box}>
                    <h1>Blender Showcase</h1>
                    <li>
                    <img src= {process.env.PUBLIC_URL + '/images/1.png'} alt="" />
                    <div className={showcase.text}>Fubiki</div>
                    </li>
                    <li>
                    <img src={process.env.PUBLIC_URL + '/images/2.png'} alt="" />
                    <div className={showcase.text}>TBF</div>
                    </li>
                    <li>
                    <img src={process.env.PUBLIC_URL + '/images/3.png'} alt="" />
                    <div className={showcase.text}>Light_Tower</div>
                    </li>
                    <li>
                    <img src={process.env.PUBLIC_URL + '/images/4.png'} alt="" />
                    <div className={showcase.text}>Model_Collection</div>
                    </li>
                    <li>
                    <img src={process.env.PUBLIC_URL + '/images/5.png'} alt="" />
                    <div className={showcase.text}>Pixel_Style</div>
                    </li>
                </ul>
            </div>
        )
    }
}
