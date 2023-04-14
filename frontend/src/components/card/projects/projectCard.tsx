import React from "react";
import Tag from "components/tag/tag";
import "./projectCard.css";

interface Props {
    /* Define the props for your component here */
    imgSrc: string;
    projectName: string;
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
        const { imgSrc, projectName, tags, lightMode } = this.props;

        return (
            /* Define the structure of your component's UI here */
            <div className={`oct-project-card ${lightMode ? "light" : ""}`}>
                <img src={imgSrc} alt={projectName} />
                <h3 className={`${lightMode ? "light" : ""}`}>{projectName}</h3>
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
