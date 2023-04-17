import React from "react";
import "./tag.css";

interface Props {
    /* Define the props for your component here */
    name: string;
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
}

class Tag extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            /* Initialize your component's state here */
        };
    }

    render() {
        const { name, lightMode } = this.props;

        return (
            /* Define the structure of your component's UI here */
            <span className={`oct-tag ${lightMode ? "light" : ""}`}>
                {name}
            </span>
        );
    }
}

export default Tag;
