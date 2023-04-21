import React from "react";
import MyButton from "components/button/button";

import "./sidenavbar.css";

interface Props {
    /* Define the props for your component here */
    lightMode?: boolean;
    isOpen: boolean;
    onClose: () => void;
    onLightMode: () => void;
}

interface State {
    /* Define the state for your component here */
}

class SideNavbar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            /* Initialize your component's state here */
        };
    }

    render() {
        const { lightMode, isOpen, onClose, onLightMode } = this.props;

        return (
            /* Define the structure of your component's UI here */
            <div className="sidenavbar-container">
                {isOpen && (
                    <div
                        className={`sidenavbar-backdrop ${
                            isOpen ? "open" : "closed"
                        }`}
                        onClick={onClose}></div>
                )}
                <nav
                    className={`side-navbar ${isOpen ? "open" : "closed"} ${
                        lightMode ? "light" : ""
                    }`}>
                    <ul>
                        <li>
                            <MyButton
                                imgSrc={`${
                                    lightMode ? "svgs/sun.svg" : "svgs/moon.svg"
                                }`}
                                lightMode={lightMode}
                                onClick={onLightMode}
                            />
                        </li>
                        <li>
                            <MyButton text="Profile" lightMode={lightMode} />
                        </li>
                        <li>
                            <MyButton text="Experience" lightMode={lightMode} />
                        </li>
                        <li>
                            <MyButton text="Projects" lightMode={lightMode} />
                        </li>
                        <li>
                            <MyButton text="Skills" lightMode={lightMode} />
                        </li>
                        <li>
                            <MyButton text="Contact" lightMode={lightMode} />
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default SideNavbar;
