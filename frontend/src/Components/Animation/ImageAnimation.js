import React from "react";
import { MDBAnimation } from "mdbreact";

const AnimationPage = ({ path, width, id }) => {
    return (
        <MDBAnimation type="pulse" infinite > 
            <img width={width} className="rounded mx-auto d-block" alt="" src={path} id={id}/>
        </MDBAnimation>
    );
};

export default AnimationPage;