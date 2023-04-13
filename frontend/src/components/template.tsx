import React from "react";

interface Props {
    /* Define the props for your component here */
}

interface State {
    /* Define the state for your component here */
}

class MyComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            /* Initialize your component's state here */
        };
    }

    render() {
        return (
            /* Define the structure of your component's UI here */
            <div></div>
        );
    }
}

export default MyComponent;
