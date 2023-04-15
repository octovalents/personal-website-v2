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

        return (
            /* Define the structure of your component's UI here */
            <div
                className={`oct-card oct-card-skill ${
                    lightMode ? "light" : ""
                }`}>
                {/* screen size > 768px */}
                <div>
                    <span>{monthsExp}</span>
                </div>
                <div className="oct-container">
                    <h2
                        className={`oct-skill-name ${
                            lightMode ? "light" : ""
                        }`}>
                        {name}
                    </h2>
                    <div className="tag-list">
                        {tags.map((tag) =>
                            lightMode ? (
                                <Tag key={tag} name={tag} lightMode />
                            ) : (
                                <Tag key={tag} name={tag} />
                            )
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillCard;
