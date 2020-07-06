import React from "react";
import { MDBAnimation } from "mdbreact";

let settings = 'infinite'

const AnimationPage = ({ path, width, id }) => {
    return (
        <MDBAnimation type="pulse" infinite slower> 
            <img width={width} className="rounded mx-auto d-block" alt="" src={path} id={id}/>
        </MDBAnimation>
    );
};

export default AnimationPage;