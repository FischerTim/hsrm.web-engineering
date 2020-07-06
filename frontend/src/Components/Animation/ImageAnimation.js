import React from "react";
import { MDBAnimation } from "mdbreact";

const AnimationPage = ({ path }) => {
    return (
        <MDBAnimation type="bounce" infinite>
            <img className="rounded mx-auto d-block" alt="" src={path} />
        </MDBAnimation>
    );
};

export default AnimationPage;