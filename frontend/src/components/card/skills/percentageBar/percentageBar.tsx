import React from "react";

import "./percentageBar.css";

interface Props {
    /* Define the props for your component here */
    monthsExp: number;
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
    percentage: number;
    circleWidth: number;
    monthsExpDisplay: number;
}

class PercentageBar extends React.Component<Props, State> {
    interval: NodeJS.Timeout | null;

    constructor(props: Props) {
        super(props);
        this.state = {
            /* Initialize your component's state here */
            percentage: 0,
            monthsExpDisplay: 0, // generate a random number between 0-99
            circleWidth: window.innerWidth < 768 ? 80 : 150,
        };
        this.interval = null;
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.percentage < 100) {
                this.setState({ percentage: this.state.percentage + 1 });
                this.setState({
                    monthsExpDisplay: Math.floor(Math.random() * 100),
                });
            } else {
                clearInterval(this.interval as NodeJS.Timeout);

                // wait for 2-3 seconds before updating monthsExpDisplay to actual value
                this.setState({ monthsExpDisplay: this.props.monthsExp });
            }
        }, 7);
        window.addEventListener("resize", this.handleResize);
    }

    handleResize = () => {
        const newWidth = window.innerWidth < 768 ? 80 : 150;
        this.setState({ circleWidth: newWidth });
    };

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }

        window.removeEventListener("resize", this.handleResize);
    }

    render() {
        const { monthsExp, lightMode } = this.props;
        const { percentage, monthsExpDisplay, circleWidth } = this.state;
        const radius = circleWidth / 2 - 5;
        const dashArray = radius * Math.PI * 2;
        const dashOffset = dashArray - (dashArray * percentage) / 100;

        return (
            /* Define the structure of your component's UI here */
            <div className="circle-percent-bar">
                <svg
                    width={circleWidth}
                    height={circleWidth}
                    viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
                    <circle
                        cx={circleWidth / 2}
                        cy={circleWidth / 2}
                        strokeWidth="5px"
                        r={radius}
                        className={`circle-background ${
                            lightMode ? "light" : ""
                        }`}
                    />
                    <circle
                        cx={circleWidth / 2}
                        cy={circleWidth / 2}
                        strokeWidth="5px"
                        r={radius}
                        className={`circle-progress ${
                            lightMode ? "light" : ""
                        }`}
                        style={{
                            strokeDasharray: dashArray,
                            strokeDashoffset: dashOffset,
                        }}
                        transform={`rotate(-90 ${circleWidth / 2} ${
                            circleWidth / 2
                        })`}
                    />
                    <text
                        x="50%"
                        y="50%"
                        dy="0.3em"
                        textAnchor="middle"
                        className={`circle-text ${lightMode ? "light" : ""}`}>
                        <tspan
                            className="months-exp"
                            x="50%"
                            y="40%"
                            dy="0.3em"
                            textAnchor="middle">
                            {monthsExpDisplay}
                        </tspan>
                        <tspan x="50%" y="60%" dy="0.3em" textAnchor="middle">
                            Months
                        </tspan>
                    </text>
                </svg>
                <span className="circle-text-exp">exp.</span>
            </div>
        );
    }
}

export default PercentageBar;
