import React from "react";

import "./section.css";

interface Props {
    /* Define the props for your component here */
    title: string;
    subtitle?: string;
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
}

class SectionTitle extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            /* Initialize your component's state here */
        };
    }

    render() {
        const { title, subtitle, lightMode } = this.props;

        return (
            /* Define the structure of your component's UI here */
            <div className="section-title">
                <hr className={`section-line ${lightMode ? "light" : ""}`} />
                <h1
                    className={`section-title-text ${
                        lightMode ? "light" : ""
                    }`}>
                    {title}
                </h1>
                <h5
                    className={`section-subtitle-text ${
                        lightMode ? "light" : ""
                    }`}>
                    {subtitle}
                </h5>
            </div>
        );
    }
}

export default SectionTitle;
