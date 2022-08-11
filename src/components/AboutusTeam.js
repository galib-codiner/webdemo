import React from 'react'
import '../styles/layout/About.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ggSrinivas from '../assests/gg-srinivas.png'
import madduriSrikant from '../assests/madduri-srikant.png'
import sreekanthAnantharaman from '../assests/sreekanth-anantharaman.png'
import gururajaRao from '../assests/gururaja-rao.png'
import sureshWarrier from '../assests/suresh-warrier.png'
import tNedumaran from '../assests/t.nedumaran.png'

const AboutusTeam = () => {
  return (
    <div className="our-team">
        <Container>
            <Row className="our-team-title">
                <Col md={12}>
                    <h2>Meet The Team</h2>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md={4}>
                    <div className="innerBox">
                        <div className="teamImage">
                            <Image src={ggSrinivas} />
                        </div>
                        <div className="team-title">
                            <h3>GG Srinivas (aka GG)</h3>
                            <h4>Co-Founder & Chief Executive Officer</h4>
                        </div>
                        <div className="teamText">
                            <p>
                                <br />
                                GG Srinivas (aka GG) is a Co-founder and CEO at 
                                42 Card Solutions. He has 20 ...
                            </p>
                        </div>
                        <div className="teamSocial">
                            <span className="leftTeamSocial"> 
                                <a href="https://www.linkedin.com/in/ggsrinivas/" target="_blank"> 
                                    <LinkedInIcon /> 
                                </a> 
                            </span>
                            <span className="rightTeamSocial"> <a href="https://www.linkedin.com/in/ggsrinivas/" target="_blank">Read More</a> </span>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="innerBox">
                        <div className="teamImage">
                            <Image src={madduriSrikant} />
                        </div>
                        <div className="team-title">
                            <h3>Madduri Srikant</h3>
                            <h4>Co-Founder & Chief Technology Officer</h4>
                        </div>
                        <div className="teamText">
                            <p>
                               
                                Madduri Srikant is a Co-founder and Chief Technology 
                                Officer of 42 Card Solutions. He is ...
                            </p>
                        </div>
                        <div className="teamSocial">
                            <span className="leftTeamSocial"> 
                                <a href="https://www.linkedin.com/in/ggsrinivas/"  target="_blank"> 
                                    <LinkedInIcon /> 
                                </a> 
                            </span>
                            <span className="rightTeamSocial"> <a href="https://www.linkedin.com/in/ggsrinivas/" target="_blank">Read More</a> </span>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="innerBox">
                        <div className="teamImage">
                            <Image src={sreekanthAnantharaman} />
                        </div>
                        <div className="team-title">
                            <h3>Sreekanth Anantharaman</h3>
                            <h4>Co-Founder & Chief Risk Officer</h4>
                        </div>
                        <div className="teamText">
                            <p>
                                <br />
                                Sreekanth Anantharaman is a Co-founder and the 
                                Chief Risk Officer of 42 Card Solutions...
                            </p>
                        </div>
                        <div className="teamSocial">
                            <span className="leftTeamSocial"> 
                                <a href="https://www.linkedin.com/in/sreekanth-anantharaman-7a46351/"  target="_blank"> 
                                    <LinkedInIcon /> 
                                </a> 
                            </span>
                            <span className="rightTeamSocial"> <a href="https://www.linkedin.com/in/sreekanth-anantharaman-7a46351/" target="_blank">Read More</a> </span>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="text-center">
            <Col md={4}>
                    <div className="innerBox">
                        <div className="teamImage">
                            <Image src={gururajaRao} />
                        </div>
                        <div className="team-title">
                            <h3>Gururaja Rao</h3>
                            <h4>Co-Founder & Head Operations​​</h4>
                        </div>
                        <div className="teamText">
                            <p>
                                <br />
                                Gururaja Rao is a Co-founder & Head of Operations at 
                                42 Card Solutions. He is a com....
                            </p>
                        </div>
                        <div className="teamSocial">
                            <span className="leftTeamSocial"> 
                                <a href="https://www.linkedin.com/in/gururaja-rao-3bb90315/"  target="_blank"> 
                                    <LinkedInIcon /> 
                                </a> 
                            </span>
                            <span className="rightTeamSocial"> <a href="https://www.linkedin.com/in/gururaja-rao-3bb90315/" target="_blank">Read More</a> </span>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="innerBox">
                        <div className="teamImage">
                            <Image src={sureshWarrier} />
                        </div>
                        <div className="team-title">
                            <h3>Suresh-Warrier</h3>
                            <h4>Co-Founder & Head of Partner Relations</h4>
                        </div>
                        <div className="teamText">
                            <p>
                                Suresh Warrier is a Co-founder and Head of Partner Relations at
                                42 Card Solutions.
                            </p>
                        </div>
                        <div className="teamSocial">
                            <span className="leftTeamSocial"> 
                                <a href="https://www.linkedin.com/in/suresh-warrier-0023405/"  target="_blank"> 
                                    <LinkedInIcon /> 
                                </a> 
                            </span>
                            <span className="rightTeamSocial"> <a href="https://www.linkedin.com/in/suresh-warrier-0023405/" target="_blank">Read More</a> </span>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="innerBox">
                        <div className="teamImage">
                            <Image src={tNedumaran} />
                        </div>
                        <div className="team-title">
                            <h3>T.Nedumaran</h3>
                            <h4>Head - Compliance</h4>
                        </div>
                        <div className="teamText">
                            <p>
                                <br />
                                T.Nedumaran is a Head of Compliance at 
                                42 Card Solutions and is involved .....
                            </p>
                        </div>
                        <div className="teamSocial">
                            <span className="leftTeamSocial"> 
                                <a href="https://hk.linkedin.com/in/nedumaran-thangamani-29b701103"  target="_blank"> 
                                    <LinkedInIcon /> 
                                </a> 
                            </span>
                            <span className="rightTeamSocial"> <a href="https://hk.linkedin.com/in/nedumaran-thangamani-29b701103" target="_blank">Read More</a> </span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default AboutusTeam