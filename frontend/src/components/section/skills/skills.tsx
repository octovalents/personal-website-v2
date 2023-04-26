import React from "react";
import SectionTitle from "../sectionTitle";
import SkillCard from "components/card/skills/skillCard";
import MyLanguage from "./languages/language";

import "../section.css";
import "./skills.css";

interface Props {
    /* Define the props for your component here */
    skills: {
        id: number;
        name: string;
        months: number;
        tags: string[];
    }[];
    languages: {
        profesional: {
            lang: string;
            src: string;
        }[];
        elementary: {
            lang: string;
            src: string;
        }[];
    };
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
}

class MySkills extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            /* Initialize your component's state here */
        };
    }

    render() {
        const { skills, languages, lightMode } = this.props;

        return (
            /* Define the structure of your component's UI here */
            <div className={`section skill ${lightMode ? "light" : ""}`}>
                <SectionTitle
                    sectionid="skills"
                    title="My Skills"
                    subtitle="I have several skills that I'm capable of:"
                    lightMode={lightMode}
                />
                <div className="skill-container">
                    {skills.map((skill) => (
                        <SkillCard
                            key={skill.id}
                            name={skill.name}
                            monthsExp={skill.months}
                            tags={skill.tags}
                            lightMode={lightMode}
                        />
                    ))}
                </div>
                <div className="lang-container">
                    <hr className={`lang-line ${lightMode ? "light" : ""}`} />
                    <h2 className={`lang-title ${lightMode ? "light" : ""}`}>
                        Language Proficiency
                    </h2>
                    <MyLanguage
                        level={Object.keys(languages)[0]}
                        languages={languages.profesional}
                        lightMode={lightMode}
                    />
                    <MyLanguage
                        level={Object.keys(languages)[1]}
                        languages={languages.elementary}
                        lightMode={lightMode}
                    />
                </div>
            </div>
        );
    }
}

export default MySkills;
