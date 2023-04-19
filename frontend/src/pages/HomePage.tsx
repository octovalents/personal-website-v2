import React from "react";
import MyHeader from "components/header/header";

const HomePage: React.FC = () => {
    return (
        <div style={{ background: "white" }}>
            <MyHeader lightMode />
            <div style={{ height: "1000px" }}>test</div>
        </div>
    );
};

export default HomePage;
