import React from "react";
import Tag from "components/tag/tag";

import "./skillCard.css";
import "../card.css";

interface Props {
    /* Define the props for your component here */
    name: string;
    monthsExp: number;
    tags: string[];
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
}

class SkillCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            /* Initialize your component's state here */
        };
    }

    render() {
        const { name, monthsExp, tags, lightMode } = this.props;
        const percentage = 25;
        const radius = 85;
        const dashArray = radius * Math.PI * 2;
        const dashOffset = dashArray - (dashArray * percentage) / 100;
        const circleWidth = 200;

        return (
            <div>
                <svg
                    width={circleWidth}
                    height={circleWidth}
                    viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
                    <circle
                        cx={circleWidth / 2}
                        cy={circleWidth / 2}
                        strokeWidth="10px"
                        r={radius}
                        className={`circle-background ${
                            lightMode ? "light" : ""
                        }`}
                    />
                    <circle
                        cx={circleWidth / 2}
                        cy={circleWidth / 2}
                        strokeWidth="10px"
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
                            x="27%"
                            y="50%"
                            dy="0.3em"
                            textAnchor="middle">
                            {monthsExp}
                        </tspan>
                        <tspan x="59%" y="50%" dy="0.3em" textAnchor="middle">
                            Months
                        </tspan>
                    </text>
                </svg>
            </div>
            /* Define the structure of your component's UI here */
            // <div
            //     className={`oct-card oct-card-skill ${
            //         lightMode ? "light" : ""
            //     }`}>
            //     {/* screen size > 768px */}

            //     <div className="oct-container">
            //         <h2
            //             className={`oct-skill-name ${
            //                 lightMode ? "light" : ""
            //             }`}>
            //             {name}
            //         </h2>
            //         <div className="tag-list">
            //             {tags.map((tag) =>
            //                 lightMode ? (
            //                     <Tag key={tag} name={tag} lightMode />
            //                 ) : (
            //                     <Tag key={tag} name={tag} />
            //                 )
            //             )}
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default SkillCard;
