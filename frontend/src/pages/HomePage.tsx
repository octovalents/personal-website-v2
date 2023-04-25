import React from "react";
import MyNavbar from "components/navbar/navbar";
import MyAbout from "components/section/about/about";
import MyCareer from "components/section/career/career";
import MyFooter from "components/section/footer/footer";

import "./homepage.css";

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
        const from_date = new Date("2022-10");
        const end_date = new Date("2022-12");

        return (
            /* Define the structure of your component's UI here */
            <div className={`homepage ${lightModeState ? "light" : ""}`}>
                <MyNavbar
                    lightMode={lightModeState}
                    onLightMode={this.handleLightMode}
                />
                <div className="container">
                    <p style={{ height: "620px" }}>test</p>
                    <MyAbout
                        imgSrc="\svgs\dummy-image.svg"
                        desc="My name is Benidictus Galih, a final year undergraduate student from Institut Teknologi Bandung. I have an experience learning as a machine learning path student at Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka. Browse my site to know more."
                        lightMode={lightModeState}
                    />
                    <MyCareer lightMode={lightModeState} />
                    <MyFooter lightMode={lightModeState} />
                </div>
            </div>
        );
    }
}

export default MyComponent;
