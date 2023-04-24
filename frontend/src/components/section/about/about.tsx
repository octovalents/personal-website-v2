import React from "react";

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
            <div className={`template ${lightMode ? "light" : ""}`}></div>
        );
    }
}

export default MyAbout;
