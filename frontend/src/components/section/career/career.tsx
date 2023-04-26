import React from "react";
import SectionTitle from "../sectionTitle";
import CareerCard from "components/card/careers/careerCard";

import "../section.css";

interface Props {
    /* Define the props for your component here */
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
}

class MyCareer extends React.Component<Props, State> {
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
            <div className={`section career ${lightMode ? "light" : ""}`}>
                <SectionTitle
                    sectionid="career"
                    title="Career Experience"
                    subtitle="A record of my professional career"
                    lightMode={lightMode}
                />
            </div>
        );
    }
}

export default MyCareer;
