import React from "react";
import MyButton from "components/button/button";
import SectionTitle from "../sectionTitle";

import "./about.css";
import "../section.css";

interface Props {
    /* Define the props for your component here */
    imgSrc: string;
    desc: string;
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
        const { imgSrc, desc, lightMode } = this.props;

        return (
            /* Define the structure of your component's UI here */
            <div className={`section about ${lightMode ? "light" : ""}`}>
                <SectionTitle
                    sectionid="profile"
                    title="My Profile"
                    lightMode={lightMode}
                />
                <img className="profile-pic" src={imgSrc} alt="My Profile" />
                <h2 className={`hello ${lightMode ? "light" : ""}`}>Hello!</h2>
                <p className={`about-desc ${lightMode ? "light" : ""}`}>
                    {desc}
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
