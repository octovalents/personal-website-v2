import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import MyButton from "components/button/button";
import "./header.css";

const Header = () => {
    return (
        <header>
            <MyButton text="Setup" />
            <MyButton imgSrc="/images/octovalents_400.png" text="Setup" />
            <MyButton
                imgSrc="/images/octovalents_400.png"
                text="Setup"
                lightMode
            />
            <MyButton imgSrc="/images/octovalents_400.png" />
        </header>
    );
};

export default Header;
