import React from "react";
import { Helmet } from 'react-helmet';
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";
import Card from "../../Components/Card.js";
import "./Movies.css";
import css from "../../Assets/css.png";
import html5 from "../../Assets/html5.png";
import js from "../../Assets/js.png";
import nodeJS from "../../Assets/nodeJS.png";
import postgreSQL from "../../Assets/postgreSQL.png";
import python from "../../Assets/python.png";
import react from "../../Assets/react.png";
import reactNative from "../../Assets/reactNative.png";

const Movies = (props) => {
    console.log("props from app:", props)

    return (

        <div className="movies">
            <Helmet>
                <title>Tanya Thomas</title>
            </Helmet>
            <Header title="Movies" />
                <h1>I excel in troubleshooting, earning the nickname <i><u>Eagle Eyes</u></i> for my ability to swiftly identify bugs and solutions. This talent, combined with adept negotiation, saved Kaplan over $2.5 million. As a career changer, I bring a wealth of diverse experience and an unwavering passion for blending logic and creativity to craft top-tier products &#45; an approach that secured me first place in the Girl Develop It hackathon and in the 48in48 Women&#39;s Build</h1>
                <div className="codingLanguges">
                    <h1>Coding languages I use frequently in my projects: </h1>
                    <div className="codingImages">
                        <div className="languageLogo">
                            <img src={html5} alt="html5 icon" />
                        </div>
                        <div className="languageLogo">
                            <div className="cssLogo">
                                <img src={css} alt="css icon" />
                            </div>
                        </div>
                        <div className="languageLogo">
                            <img src={js} alt="javascript icon" />
                        </div>
                        <div className="languageLogo">
                            <img src={nodeJS} alt="nodeJS icon" />
                        </div>
                        <div className="languageLogo">
                            <img src={react} alt="react icon" />
                        </div>
                            <div className="languageLogo">
                        <img src={reactNative} alt="reactNative icon" />
                            </div>
                        <div className="languageLogo">
                            <img src={python} alt="python icon" />
                        </div>
                        <div className="languageLogo">
                            <img src={postgreSQL} alt="postgreSQL icon" />
                        </div>
                    </div>
                </div>
                <div className="cardWrapper">
                    <div className="movieCard">
                    {props.movies.map((movie, key) => {
                        return <Card 
                            // imgSrc={index <= 6 ? movie[index] : movie[6]}
                            // title = {movie.title}
                            // plot = {movie.plot}
                            // releaseDate = {movie.releaseDate}
                            movie = {movie}
                            key = {key} />
                    })}
                    </div>
                </div>
            <Footer title="Footer" />
        </div>
        );
}

export default Movies;