import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Ashish Choudhary</span>
                    </h1>
                    <p>
                    A Software Engineer from India, who focuses on building new functionalities as well as interactive design & 
                    A vivid problem solver to help and impact large number of people. 
                    Also worked as a Software Developer in Capgemini, Newfold Digital,etc.
                    </p>
                    
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="JS Dev Hindi"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">
                            Projects
                            <link rel="stylesheet" href="https://www.linkedin.com/in/ashish-choudhary321/" />
                        </div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>4k+</span>
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
