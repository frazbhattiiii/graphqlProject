import React from 'react';
//gql is used to make the query and useQuery is used to get the data(errors,loading State) from the server
import {gql,useQuery} from '@apollo/client';
import Box from "@mui/material/Box";
import { GET_PROJECTS } from "../../Queries/ProjectQueries";
import BasicCard from "./ProjectCard";

function ProjectComp ( props ) {

    const {loading,error,data} = useQuery(GET_PROJECTS);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error :(</p>
    const projects = data.projects;

    return (
        <>
            <Box sx={{
                margin:'4rem',
            }}>
                <BasicCard items={projects}/>
            </Box>
        </>
    );
}

export default ProjectComp;