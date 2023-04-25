import React from "react";
import SectionTitle from "../sectionTitle";
import ProjectCard from "components/card/projects/projectCard";

import "../section.css";
// import "./project.css";

interface Props {
    /* Define the props for your component here */
    projects: {
        id: number;
        name: string;
        src: string;
        tags: string[];
        desc: string;
        url: string;
        notes: string;
    }[];
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
}

class MyProject extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            /* Initialize your component's state here */
        };
    }

    render() {
        const { projects, lightMode } = this.props;

        return (
            /* Define the structure of your component's UI here */
            <div className={`section project ${lightMode ? "light" : ""}`}>
                <SectionTitle
                    title="My Projects"
                    subtitle="Top projects that led me developed my skills"
                    lightMode={lightMode}
                />
                {projects.map((project) => (
                    <ProjectCard
                        imgSrc={project.src}
                        name={project.name}
                        tags={project.tags}
                    />
                ))}
            </div>
        );
    }
}

export default MyProject;
