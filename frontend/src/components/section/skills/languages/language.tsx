import React from "react";

import "./language.css";

interface Props {
    /* Define the props for your component here */
    level: string;
    languages: {
        lang: string;
        src: string;
    }[];
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
}

class MyLanguage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            /* Initialize your component's state here */
        };
    }

    render() {
        const { level, languages, lightMode } = this.props;

        return (
            /* Define the structure of your component's UI here */
            <div className={`lang-section ${lightMode ? "light" : ""}`}>
                <h4 className={`lang-level ${lightMode ? "light" : ""}`}>
                    {level}
                </h4>
                <div className="lang-card">
                    {languages.map((language) => (
                        <img
                            src={language.src}
                            alt={language.lang}
                            title={language.lang}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default MyLanguage;
