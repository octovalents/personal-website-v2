import React from "react";
import Tag from "components/tag/tag";

import "./projectCard.css";
import "../card.css";

interface Props {
    /* Define the props for your component here */
    imgSrc: string;
    name: string;
    tags: string[];
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
}

class ProjectCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            /* Initialize your component's state here */
        };
    }

    render() {
        const { imgSrc, name, tags, lightMode } = this.props;

        return (
            /* Define the structure of your component's UI here */
            <div
                className={`oct-card oct-project-card ${
                    lightMode ? "light" : ""
                }`}>
                <img src={imgSrc} alt={name} />
                <h3 className={`${lightMode ? "light" : ""}`}>{name}</h3>
                <div className="tag-list">
                    {tags.map((tag) =>
                        lightMode ? (
                            <Tag name={tag} lightMode />
                        ) : (
                            <Tag name={tag} />
                        )
                    )}
                </div>
            </div>
        );
    }
}

export default ProjectCard;
