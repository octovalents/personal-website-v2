import React from "react";
import Tag from "components/tag/tag";

import "./careerCard.css";
import "../card.css";

interface Props {
    /* Define the props for your component here */
    positionJob: string;
    companyName: string;
    jobType: string;
    fromDate: Date;
    toDate: Date;
    tags: string[];
    lightMode?: boolean;
}

interface State {
    /* Define the state for your component here */
}

class CareerCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            /* Initialize your component's state here */
        };
    }

    render() {
        const {
            positionJob,
            companyName,
            jobType,
            fromDate,
            toDate,
            tags,
            lightMode,
        } = this.props;

        // Calculate the difference in months between the start and end dates
        const monthsDiff =
            (toDate.getFullYear() - fromDate.getFullYear()) * 12 +
            (toDate.getMonth() - fromDate.getMonth());

        // Format the start and end dates as "MMM YYYY" (e.g. "Oct 2022")
        const fromDateStr = fromDate.toLocaleString("default", {
            month: "short",
            year: "numeric",
        });
        const endDateStr = toDate.toLocaleString("default", {
            month: "short",
            year: "numeric",
        });

        return (
            /* Define the structure of your component's UI here */
            <div
                className={`oct-card oct-card-career ${
                    lightMode ? "light" : ""
                }`}>
                <h1 className={`position-job ${lightMode ? "light" : ""}`}>
                    {positionJob}
                </h1>
                <div className={`desc ${lightMode ? "light" : ""}`}>
                    <span
                        className={`company-name ${lightMode ? "light" : ""}`}>
                        {companyName}
                    </span>
                    <span
                        className={`oct-desc-norm ${lightMode ? "light" : ""}`}>
                        {" "}
                        · {jobType}
                    </span>
                </div>
                <div
                    className={`date oct-desc-norm ${
                        lightMode ? "light" : ""
                    }`}>
                    <span>{fromDateStr} - </span>
                    <span>{endDateStr}</span>
                    <span> · {monthsDiff} Mos</span>
                </div>
                <div className="tag-list">
                    {tags.map((tag) =>
                        lightMode ? (
                            <Tag name={tag} key={tag} lightMode />
                        ) : (
                            <Tag name={tag} key={tag} />
                        )
                    )}
                </div>
            </div>
        );
    }
}

export default CareerCard;
