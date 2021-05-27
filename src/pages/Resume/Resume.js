import React, { Component } from 'react'


export default class Resume extends Component {
    render() {
        return (
            <div>                
                <div className="container">
                  <hr />
                  <div className="row">
                    <div className="col-6">
                      <h1>Jim Yim&nbsp;</h1>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-8 col-sm-12">
                      <div className="media">
                        <div className="media-body">
                          <h5 className="mt-0">Web/Game Developer</h5>
                          I am a cautious and organized programmer. Make the program to be maintained easily is my first purpose. I do not have any working experience but I am willing to learn any thing. My academic result can promise my learing ability.
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="row justify-content-md-around m-1">
                        <address>
                          <strong>Jim Yim</strong><br />
                          Southern District<br />                       
                          Hong Kong<br />
                          Phone: 63604868<br />
                          yim.201314@gmail.com<br/>
                        </address>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <h2>Education</h2>
                      <hr />
                      <div className="row">
                        <div className="col-6 col-lg-6">
                          <h4>The Hong Kong Polytechnic University</h4>
                        </div>
                        <div className="col-6 offset-lg-0 col-lg-6">
                          <h5 className="text-right"><span aria-hidden="true"> </span> Sep 2019 - Jun 2023&nbsp; &nbsp; Current GPA: 3.41&nbsp; &nbsp;&nbsp;</h5>
                        </div>
                      </div>
                      <h5><span className="badge badge-secondary">BSc (HONS) Internet &amp; Multimedia Technologies</span></h5>
                      <p>This programme aim to train a programmer with a better knowledge about art. It includes some course about creating game, client-site and server- site web programming. It also helps student to have a hand-on experience in new technology such as cloud computing, internet of thing and machine learning.&nbsp; &nbsp; &nbsp; &nbsp;</p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <h2>Skill Set</h2>
                      <hr />
                      <div className="progress mt-4">
                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}> HTML / CSS / JAVASCRIPT</div>
                      </div>
                      <div className="progress mt-4">
                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}> C / C++ / C# / JAVA / PYTHON</div>
                      </div>
                      <div className="progress mt-4">
                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}> Java Servlet</div>
                      </div>
                      <div className="progress mt-4">
                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '65%'}}> React.js</div>
                      </div>
                      <div className="progress mt-4">
                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}> Microsoft Office </div>
                      </div>
                      <div className="progress mt-4">
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}> Adobe Creative Cloud</div>
                      </div>
                      <div className="progress mt-4">
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}> Unity3D</div>
                      </div>
                      <div className="progress mt-4">
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}> Blender</div>
                      </div>
                      <h4>
                      </h4></div>
                  </div>
                  <hr />
                  <h2>Project Experience</h2>
                  <hr />
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="row">
                        <div className="col-5">
                          <h4>EIE2264</h4>
                        </div>
                        <div className="col-6">
                          <h5 className="text-right"><span aria-hidden="true" /> Sep 2018 - May 2019</h5>
                        </div>
                      </div>
                      <h5><span className="badge badge-secondary">Game Programming</span></h5>
                      <p>The project is about writing a game like Candy Crush</p>
                      <ul>
                        <li>
                          Using C# to build a window app in Visual stdio
                        </li>
                        <li>1500 rows of codes</li>
                        <li>The final result is A+</li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="row">
                        <div className="col-5">
                          <h4>EIE3320</h4>
                        </div>
                        <div className="col-6">
                          <h5 className="text-right"><span aria-hidden="true" /> Sep 2019 - Jan 2020</h5>
                        </div>
                      </div>
                      <h5><span className="badge badge-secondary">Web Programming</span></h5>
                      <p>This project is about writing a simple website for book shop.&nbsp;</p>
                      <ul>
                        <li>Using Java Script, Html, Css for frontend.</li>
                        <li>Using Java Servlet for backend.</li>
                        <li>Deploy the website on Tomcat</li>
                        <li>The final result is A</li>
                      </ul>
                    </div>
                  </div>
                  <hr /> 
                  <hr />
                </div>
                <hr />
                

            </div>
        )
    }
}
