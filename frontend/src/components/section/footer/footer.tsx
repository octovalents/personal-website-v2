import React from "react";

import "./footer.css";

interface Props {
    /* Define the props for your component here */
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
}

class MyFooter extends React.Component<Props, State> {
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
            <div className={`oct-footer ${lightMode ? "light" : ""}`}>
                <hr className={`footer-line ${lightMode ? "light" : ""}`} />
                <div className="footer-list-sm">
                    <ul className={`footer-list ${lightMode ? "light" : ""}`}>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#profile">Profile</a>
                        </li>
                        <li>
                            <a href="#career">Experience</a>
                        </li>
                    </ul>
                    <ul className={`footer-list ${lightMode ? "light" : ""}`}>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-list-lg">
                    <ul className={`footer-list ${lightMode ? "light" : ""}`}>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#profile">Profile</a>
                        </li>
                        <li>
                            <a href="#career">Experience</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <p className={`footer-text ${lightMode ? "light" : ""}`}>
                    Built in ReactJS, Django, and MySQL.
                </p>
            </div>
        );
    }
}

export default MyFooter;
