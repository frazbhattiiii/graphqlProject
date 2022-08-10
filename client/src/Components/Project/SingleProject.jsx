import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { FlexBox } from "../../styles";
import GoBackBtn from "../common/GoBackBtn";
import ClientInfo from "./ClientInfo";
import { useParams } from "react-router-dom";
import { GET_CLIENTS } from "../../Queries/ClientQueries";
import { GET_PROJECT } from "../../Queries/ProjectQueries";
import { useQuery } from "@apollo/client";

function SingleProject ( props ) {
    const {id}= useParams();
    const {loading,error,data}= useQuery(GET_PROJECT,{
        variables:{
            id,
        }
    })
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error :(</p>
    const {project}= data;
    console.log(project)
    return (
        <>
            <FlexBox>
            <Card sx={ { minWidth : '40%',
                margin:'4rem'} }>
                <Box sx={{
                    display:'flex',
                    justifyContent:"flex-end",
                    alignItems:"center",
                }}>
                    <GoBackBtn/>
                </Box>
                <CardContent>
                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:"flex-start",
                        gap:'.75rem'
                    }}>
                    <Typography sx={ { fontSize : 28,fontWeight:'bold',color:'red' } } gutterBottom>
                        {project.name}
                    </Typography>
                        <Typography variant="body2">
                            {project.description}
                        </Typography>
                    <Typography variant="h5" fontWeight='bold' color='text.secondary'>
                        Project Status
                    </Typography>
                        <Typography variant="h6" sx={{
                            color:'green'
                        }}>
                            {project.status}
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{
                        marginTop:'4rem',
                        color:'red',
                        fontWeight:'bold'
                    }}>
                        Client Information
                    </Typography>
                    <ClientInfo client={project.client}/>
                </CardContent>

                <CardActions>
                </CardActions>
            </Card>
            </FlexBox>
        </>
    );
}

export default SingleProject;