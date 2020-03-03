import React from "react";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import Img from "../img/JenGamez.jpg";
import "../styles/Img.css";
import "../styles/About.css";


function About() {
    return (
        <div>
           
            <Container fluid>
                
                <Row>
                    <Col size="md-12">
                        <h1 class="aboutme">Jen Gamez</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col size="md-4">


                            <div>
                                <img src={Img} alt="JenGamez" class="jengamez"></img>
                            </div>
                            </Col>

                            <Col size="md-8">

                            {/* <h2 class="name">Jen Gamez</h2> */}
                                <div class="bio">Front End Web Developer with a background in digital marketing and business management. I am close to completing the University of California San Diego’s Full Stack Web Development program. Skills learned so far include HTML, CSS, Javascript, JQuery, APIs, Node JS, OOP, Express, MySql, Sequelize, Heroku, GitHub, Mongo, Mongoose, routing, AJAX, React and MERN. In addition, seven years ago I founded and became Managing Director of a law firm, where I am currently responsible for digital marketing (including cross-platform promotion, website design, blogs with Search Engine Optimized (SEO) content, branding, social media, vlogging, and email campaigns), public relations, accounting, human recourses, and overall business management. I have a proven track-record of taking projects from concept to execution with enthusiasm and professionalism, successfully working with a team or autonomously. I am excited to help other businesses grow by utilizing my web development and digital marketing skills to build websites and convert website visitors into customers.</div>

                            </Col>
</Row>
                

            </Container>

        </div>

                )
            
            }
            
export default About;