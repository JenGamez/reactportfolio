import React from "react";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import "../styles/About.css";
import Shotcaller from '../img/Shotcaller.png';
import moviememe from "../img/moviememe.png";
import weatherdashboard from "../img/weatherdashboard.png";
import Codingquiz from "../img/Codingquiz.png";

function Projects() {
    return (
        <div>
            <Container fluid>
                
                <Row>
                    <Col size="md-12">
                        <h1 class="projects"></h1>
                        </Col>
                    </Row>
                    <Row>
                    <Col size="md-12">
                        <h1 class="projects">Shot Caller</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col size="md-4">


                            <div>
                            <a href="https://taylornburrows.github.io/shot_caller/index.html" target="_blank">
                       <img src={Shotcaller} alt="Shotcaller" height="200" width="250"  /> </a>
                            </div>
                            </Col>

                            <Col size="md-8">

                            {/* <h2 class="name">Jen Gamez</h2> */}
                                <div class="bio">
                                <p>Are you thirsty and don’t know where to turn?
                        Shot caller is an all-in-one solution to help solve your dry spell. This application helps the
                        user find a good drink (with a sense of humor) and even teaches you how to make it.

                        When you choose your booze, you call all the shots. Click <a
                            href="https://taylornburrows.github.io/shot_caller/index.html" target="_blank">here</a> or
                        on the image to view website.
                    </p>
                    <div id="shot-caller-repo"><a href="https://github.com/TaylorNBurrows/shot_caller.git"
                            target="_blank">GitHub repository</a></div>

                                </div>

                            </Col>
</Row>
<br></br>
<Row>
                    <Col size="md-12">
                        <h1 class="projects">Movie Meme Mash</h1>
                        </Col>
                    </Row>
<Row>
                        <Col size="md-4">


                            <div>
                            <a href="http://react-movie-memes.herokuapp.com/" target="_blank">
                       <img src={moviememe} alt="Moviememe" height="200" width="250"  /> </a>
                            </div>
                            </Col>

                            <Col size="md-8">

                            {/* <h2 class="name">Jen Gamez</h2> */}
                                <div class="bio">
                                <p>Share how you really feel about a movie! Users can read or write movie reviews, but more than that - they can share how they viscerally feel about a movie with a GIF. React Movie Review taps into the OMDB API to get the latest movie data that is searchable by the user.  When users write their movie review, they have the option to enter a word describing how the movie makes them feel. At that point, GIPHY options pop up for the user to chose. Both the review and the GIF URL are stored so those with a login can view past movie reviews. Passport.js was implemented for login authentication. This app uses a Node and Express server and is backed by a MySql database and follows the MVC (Model-View-Controller) paradigm. Click <a
                href="http://react-movie-memes.herokuapp.com/" target="_blank">here</a> or
            on the image to view the website deployed to Heroku.
        </p>
        <div id="react-movie-repo"><a href="https://github.com/mattchley/react-movie-memes"
                target="_blank">GitHub repository</a></div>

                                </div>

                            </Col>
</Row>

<br></br>
<Row>
                    <Col size="md-12">
                        <h1 class="projects">Weather Dashboard</h1>
                        </Col>
                    </Row>
<Row>
                        <Col size="md-4">


                            <div>
                            <a href="https://jengamez.github.io/Weather-Dashboard/" target="_blank">
                       <img src={weatherdashboard} alt="WeatherDashboard" height="200" width="250"  /> </a>
                            </div>
                            </Col>

                            <Col size="md-8">

                            {/* <h2 class="name">Jen Gamez</h2> */}
                                <div class="bio">
                                <p>This Weather Dashboard give you the current weather and three-hour forecast for cities all over the word. Simply type in the city and press the search button. To view a previously searched city, click the listed city on the left panel. Click <a href="https://jengamez.github.io/Weather-Dashboard/" target="_blank">here</a> or
                        on the image to view website.
                    </p>
                    <div id="weather-dashboard-repo"><a href="https://github.com/JenGamez/Weather-Dashboard.git"
                            target="_blank">GitHub repository</a></div>

                                </div>

                            </Col>
</Row>
                
<br></br>
<Row>
                    <Col size="md-12">
                        <h1 class="projects">Coding Quiz</h1>
                        </Col>
                    </Row>
<Row>
                        <Col size="md-4">


                            <div>
                            <a href="https://jengamez.github.io/Coding-Quiz/" target="_blank">
                       <img src={Codingquiz} alt="CodingQuiz" height="200" width="250"  /> </a>
                            </div>
                            </Col>

                            <Col size="md-8">

                            {/* <h2 class="name">Jen Gamez</h2> */}
                                <div class="bio">
                                <p>This Coding Quiz asks user ten JavaScript questions with four clickable multiple choice answers. Once the user chooses an answer, a prompt appears letting the user know if the answer is "Corret" or "Wrong". There is a timer for 60 seconds on the top right corner Click <a href="https://jengamez.github.io/Coding-Quiz/" target="_blank">here</a> or
                            on the image to view website.
                        </p>
                        <div id="coding-quiz-repo"><a href="https://jengamez.github.io/Coding-Quiz/"
                                target="_blank">GitHub repository</a></div>

                                </div>

                            </Col>
</Row>
                

            </Container>

        </div>

    )

}

export default Projects;