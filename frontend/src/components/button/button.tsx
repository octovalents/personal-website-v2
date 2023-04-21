import React from "react";

import "./button.css";

interface Props {
    /* Define the props for your component here */
    lightMode?: boolean;
    imgSrc?: string;
    text?: string;
    onClick?: () => void;
}

interface State {
    /* Define the state for your component here */
}

class MyButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            /* Initialize your component's state here */
        };
    }

    render() {
        const { imgSrc, text, lightMode, onClick } = this.props;
        let content = null;

        if (imgSrc && text) {
            content = (
                <>
                    <img
                        src={imgSrc}
                        alt="Button icon"
                        className="oct-btn-icon"
                        style={{ marginRight: "15px" }}
                    />
                    <span className="oct-btn-text">{text}</span>
                </>
            );
        } else if (imgSrc) {
            content = (
                <img src={imgSrc} alt="Button icon" className="oct-btn-icon" />
            );
        } else if (text) {
            content = <span className="oct-btn-text">{text}</span>;
        }

        return (
            /* Define the structure of your component's UI here */
            <button
                className={`oct-btn ${lightMode ? "light" : ""}`}
                onClick={onClick}>
                {content}
            </button>
        );
    }
}

export default MyButton;
