import React from "react";
import MyButton from "components/button/button";

import "./about.css";
import "../section.css";

interface Props {
    /* Define the props for your component here */
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
}

class MyAbout extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            /* Initialize your component's state here */
        };
    }

    render() {
        const { lightMode } = this.props;

        return (
            /* Define the structure of your component's UI here */
            <div className={`section about ${lightMode ? "light" : ""}`}>
                <div className="section-title">
                    <h1
                        className={`section-title-text ${
                            lightMode ? "light" : ""
                        }`}>
                        My Profile
                    </h1>
                    <h5
                        className={`section-subtitle-text ${
                            lightMode ? "light" : ""
                        }`}></h5>
                </div>
                <img
                    className="profile-pic"
                    src="\svgs\dummy-image.svg"
                    alt="dummy-image"
                />
                <h2 className={`hello ${lightMode ? "light" : ""}`}>Hello!</h2>
                <p className={`about-desc ${lightMode ? "light" : ""}`}>
                    My name is Benidictus Galih, a final year undergraduate
                    student from Institut Teknologi Bandung. I have an
                    experience learning as a machine learning path student at
                    Bangkit Academy led by Google, Tokopedia, Gojek, &
                    Traveloka. Browse my site to know more.
                </p>
                <div className="btn-about">
                    <MyButton
                        text="Contact me"
                        imgSrc="\svgs\send.svg"
                        lightMode={lightMode}
                    />
                    <MyButton
                        text="My resume"
                        imgSrc="\svgs\file.svg"
                        lightMode={lightMode}
                    />
                </div>
            </div>
        );
    }
}

export default MyAbout;
