import React from "react";
import MyNavbar from "components/navbar/navbar";
import MyAbout from "components/section/about/about";
import MyCareer from "components/section/career/career";
import MyProject from "components/section/projects/project";
import MySkills from "components/section/skills/skills";
import MyFooter from "components/section/footer/footer";

import "./homepage.css";

interface Props {
    /* Define the props for your component here */
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
    lightModeState: boolean;
}

class MyComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            /* Initialize your component's state here */
            lightModeState: false,
        };
        this.handleLightMode = this.handleLightMode.bind(this);
    }

    handleLightMode() {
        const isLightMode = !this.state.lightModeState;
        this.setState({ lightModeState: isLightMode });
    }

    render() {
        const { lightMode } = this.props;
        const { lightModeState } = this.state;
        const projects = [
            {
                id: 1,
                name: "My Awesome Project",
                src: "/svgs/dummy-image.svg",
                tags: ["web development", "JavaScript", "React"],
                desc: "A web application that allows users to create and share custom playlists.",
                url: "https://github.com/myusername/myawesomeproject",
                notes: "This project is still a work in progress and may have some bugs.",
            },
            {
                id: 2,
                name: "Weather App",
                src: "/svgs/dummy-image.svg",
                tags: ["web development", "API integration", "React"],
                desc: "A web application that shows the current weather and forecast for a given location.",
                url: "https://github.com/myusername/weatherapp",
                notes: "This project uses the OpenWeatherMap API for weather data.",
            },
            {
                id: 3,
                name: "Chatbot",
                src: "/svgs/dummy-image.svg",
                tags: [
                    "artificial intelligence",
                    "natural language processing",
                    "Python",
                ],
                desc: "A chatbot that can answer questions and carry on a conversation with users.",
                url: "https://github.com/myusername/chatbot",
                notes: "This project uses the Natural Language Toolkit (NLTK) library for text processing.",
            },
        ];
        const skills = [
            {
                id: 1,
                name: "JavaScript",
                months: 24,
                tags: ["Front-end Development", "Node.js", "React"],
            },
            {
                id: 2,
                name: "Python",
                months: 36,
                tags: ["Data Science", "Machine Learning", "Flask"],
            },
            {
                id: 3,
                name: "SQL",
                months: 48,
                tags: ["Relational Databases", "Data Analysis", "PostgreSQL"],
            },
            {
                id: 4,
                name: "HTML",
                months: 60,
                tags: ["Web Development", "Accessibility", "SEO"],
            },
            {
                id: 5,
                name: "CSS",
                months: 60,
                tags: ["Responsive Design", "Bootstrap", "Sass"],
            },
            {
                id: 6,
                name: "Java",
                months: 36,
                tags: ["Enterprise Development", "Spring Framework", "Maven"],
            },
        ];
        const languages = {
            profesional: [
                {
                    lang: "eng",
                    src: "/svgs/dummy-image.svg",
                },
                {
                    lang: "spa",
                    src: "/svgs/dummy-image.svg",
                },
                {
                    lang: "fra",
                    src: "/svgs/dummy-image.svg",
                },
            ],
            elementary: [
                {
                    lang: "ger",
                    src: "/svgs/dummy-image.svg",
                },
                {
                    lang: "jpn",
                    src: "/svgs/dummy-image.svg",
                },
            ],
        };

        return (
            /* Define the structure of your component's UI here */
            <div className={`homepage ${lightModeState ? "light" : ""}`}>
                <MyNavbar
                    lightMode={lightModeState}
                    onLightMode={this.handleLightMode}
                />
                <div className="container">
                    <p style={{ height: "620px" }}>test</p>
                    <MyAbout
                        imgSrc="\svgs\dummy-image.svg"
                        desc="My name is Benidictus Galih, a final year undergraduate student from Institut Teknologi Bandung. I have an experience learning as a machine learning path student at Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka. Browse my site to know more."
                        lightMode={lightModeState}
                    />
                    <MyCareer lightMode={lightModeState} />
                    <MyProject projects={projects} lightMode={lightModeState} />
                    <MySkills
                        skills={skills}
                        languages={languages}
                        lightMode={lightModeState}
                    />
                    <MyFooter lightMode={lightModeState} />
                </div>
            </div>
        );
    }
}

export default MyComponent;
