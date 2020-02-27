import React from "react";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import Img from "../img/JenGamez.jpg";
import "../styles/Img.css";


function About() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col size="md-3">
<h1>Jen Gamez</h1>

<div>
                        <img src={Img} alt="JenGamez" class="jengamez"></img>
                    </div>


                    </Col>

                    <Col size="md-9">
                        <h1>Is fucking rad</h1>



</Col>

                    



                </Row>

            </Container>

        </div>

    )

}

export default About;