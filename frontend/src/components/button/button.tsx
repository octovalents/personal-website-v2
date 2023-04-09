import React, { useState } from "react";
import "./button.css";

interface ButtonProps {
    lightMode?: boolean;
    imgSrc?: string;
    text?: string;
}

const MyButton: React.FC<ButtonProps> = ({
    imgSrc,
    text,
    lightMode = false,
}: ButtonProps) => {
    let content = null;
    let className = "oct-btn";

    if (imgSrc && text) {
        content = (
            <>
                <img
                    src={imgSrc}
                    alt="Button icon"
                    className="oct-btn-icon"
                    style={{ marginRight: "15px" }}
                />
                <span className="oct-btn-text">{text}</span>
            </>
        );
    } else if (imgSrc) {
        content = (
            <img src={imgSrc} alt="Button icon" className="oct-btn-icon" />
        );
    } else if (text) {
        content = <span className="oct-btn-text">{text}</span>;
    }

    if (lightMode) {
        className = "oct-btn light";
    }

    return <button className={className}>{content}</button>;
};

export default MyButton;
