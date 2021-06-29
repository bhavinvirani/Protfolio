import React from "react";

import { Fade } from "react-reveal";
import "./Greeting.css";
import landingPerson from "../../assets/lottie/landingPerson.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import { greeting } from "../../portfolio";

export default function Greeting() {
    
    return (
        <Fade bottom duration={1300} distance="40px">
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div className="greeting-text-div">
                        <div>
                            <h1 className="greeting-text" >
                                {greeting.greetingText}{" "}
                                <span className="glitch"> 
                                    {greeting.greetingName}
                                </span>
                            </h1>
                            <p className="greeting-text-p">
                                {greeting.subTitle}
                            </p>
                            <SocialMedia />

                            <div className="button-greeting-div">
                                <Button text="Contact me" href="#contact"/>
                                <Button
                                    text="See my resume"
                                    newTab={true}
                                    href={greeting.resumeLink}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="greeting-image-div">
                        {
                            <DisplayLottie animationData={landingPerson} />
                        }
                    </div>
                </div>
            </div>
        </Fade>
    );
}
