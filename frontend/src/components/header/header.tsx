import React from "react";
import MyButton from "components/button/button";

import "./header.css";

interface Props {
    /* Define the props for your component here */
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
    paddings: string;
}

class MyHeader extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const scrollPosition = window.scrollY;
        this.state = {
            /* Initialize your component's state here */
            paddings: scrollPosition > 50 ? "20px 40px" : "40px",
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        const scrollPosition = window.scrollY;
        const paddings = scrollPosition > 50 ? "20px 40px" : "40px";
        this.setState({ paddings });
    }

    render() {
        const { lightMode } = this.props;
        const { paddings } = this.state;

        return (
            /* Define the structure of your component's UI here */
            <div
                className={`oct-header ${lightMode ? "light" : ""}`}
                style={{ padding: paddings }}>
                <MyButton imgSrc="svgs/icon.svg" />
                <div className="topnav menu-container-sm">
                    <img src="svgs/menu.svg" alt="Menu" />
                </div>
                <div className="topnav menu-container-lg">
                    <MyButton imgSrc="svgs/sun.svg" lightMode={lightMode} />
                    <MyButton text="Profile" lightMode={lightMode} />
                    <MyButton text="Experience" lightMode={lightMode} />
                    <MyButton text="Projects" lightMode={lightMode} />
                    <MyButton text="Skills" lightMode={lightMode} />
                    <MyButton text="Contact" lightMode={lightMode} />
                </div>
            </div>
        );
    }
}

export default MyHeader;
