import React from "react";
import MyNavbar from "components/navbar/navbar";

interface Props {
    /* Define the props for your component here */
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
    lightModeState: boolean;
}

class MyComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            /* Initialize your component's state here */
            lightModeState: false,
        };
        this.handleLightMode = this.handleLightMode.bind(this);
    }

    handleLightMode() {
        const isLightMode = !this.state.lightModeState;
        this.setState({ lightModeState: isLightMode });
    }

    render() {
        const { lightMode } = this.props;
        const { lightModeState } = this.state;

        return (
            /* Define the structure of your component's UI here */
            <div className={`template ${lightMode ? "light" : ""}`}>
                <MyNavbar
                    lightMode={lightModeState}
                    onLightMode={this.handleLightMode}
                />
            </div>
        );
    }
}

export default MyComponent;
