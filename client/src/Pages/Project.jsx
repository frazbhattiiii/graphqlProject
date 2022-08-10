import React from 'react';
import ResponsiveAppBar from "../Components/AppBar";
import ProjectComp from "../Components/Project";

function Project ( props ) {
    return (
        <>
        <ResponsiveAppBar/>
            <ProjectComp/>
        </>
    );
}

export default Project;