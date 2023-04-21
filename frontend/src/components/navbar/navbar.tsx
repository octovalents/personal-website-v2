import React from "react";
import MyButton from "components/button/button";
import SideNavbar from "./sidenavbar/sidenavbar";

import "./navbar.css";

interface Props {
    /* Define the props for your component here */
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
    paddings: string;
    isSideNavbarOpen: boolean;
}

class MyNavbar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const scrollPosition = window.scrollY;
        this.state = {
            /* Initialize your component's state here */
            paddings: scrollPosition > 50 ? "20px 40px" : "40px",
            isSideNavbarOpen: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleNavbarClick = this.handleNavbarClick.bind(this);
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

    handleNavbarClick() {
        const isSideNavbar = !this.state.isSideNavbarOpen;
        this.setState({ isSideNavbarOpen: isSideNavbar });
    }

    render() {
        const { lightMode } = this.props;
        const { paddings, isSideNavbarOpen } = this.state;

        return (
            /* Define the structure of your component's UI here */
            <div
                className={`oct-header ${lightMode ? "light" : ""}`}
                style={{ padding: paddings }}>
                <div className="menu-home">
                    <img src="svgs/icon.svg" alt="Home" />
                </div>
                <div className="topnav menu-container-sm">
                    <img
                        className={`svg-menu-navbar ${
                            lightMode ? "light" : ""
                        } `}
                        src="svgs/menu.svg"
                        alt="Menu"
                        onClick={this.handleNavbarClick}
                    />
                </div>
                <div className="topnav menu-container-lg">
                    <MyButton imgSrc="svgs/sun.svg" lightMode={lightMode} />
                    <MyButton text="Profile" lightMode={lightMode} />
                    <MyButton text="Experience" lightMode={lightMode} />
                    <MyButton text="Projects" lightMode={lightMode} />
                    <MyButton text="Skills" lightMode={lightMode} />
                    <MyButton text="Contact" lightMode={lightMode} />
                </div>
                <SideNavbar
                    lightMode={lightMode}
                    isOpen={isSideNavbarOpen}
                    onClose={this.handleNavbarClick}
                />
            </div>
        );
    }
}

export default MyNavbar;
