import React from "react";
import "./hometext.css";

const HomeText: React.FC = () => {
    return (
        <div className="my-own-banner">
            <div>
                <span className="my-own-banner-text1">Creating</span>
                <span className="my-own-banner-text2">impact</span>
            </div>
            <div>
                <span className="my-own-banner-text3">with</span>
                <span className="my-own-banner-text4">IT solution</span>
            </div>
        </div>
    );
};

export default HomeText;
