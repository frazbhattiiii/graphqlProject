import React from 'react';
import SingleProject from "../Components/Project/SingleProject";
import ResponsiveAppBar from "../Components/AppBar";

function ProjectInfo ( props ) {
    return (
        <>
            <ResponsiveAppBar/>
        <SingleProject/>
        </>
    );
}

export default ProjectInfo;