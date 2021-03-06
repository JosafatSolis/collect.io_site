import React from "react";
import LeftColNav from "./common/LeftColNav";
import MainRightCol from "./main/MainRightCol";

const Home = () => {
    return(
        <div id="main" style={{ display: "flex"}}>
            <LeftColNav />
            <MainRightCol />
        </div>
    )
};

export default Home;