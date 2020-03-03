import React from "react";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import "../styles/About.css";

function Projects() {
    return (
        <div>
            <Container fluid>
                
                <Row>
                    <Col size="md-12">
                        <h1 class="projects">Projects</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col size="md-4">


                            <div>
                                Image here
                            </div>
                            </Col>

                            <Col size="md-8">

                            {/* <h2 class="name">Jen Gamez</h2> */}
                                <div class="bio">Project description here</div>

                            </Col>
</Row>
                

            </Container>

        </div>

    )

}

export default Projects;