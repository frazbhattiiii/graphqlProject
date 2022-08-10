import React from 'react';
//gql is used to make the query and useQuery is used to get the data(errors,loading State) from the server
import {gql,useQuery} from '@apollo/client';
import CustomizedTables from "../common/Table";
import Box from "@mui/material/Box";
import { GET_CLIENTS } from "../../Queries/ClientQueries";
import CustomModal from "../common/Modal";
function Client ( props ) {
    const {loading,error,data} = useQuery(GET_CLIENTS);
    console.log(data)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error :(</p>

    return (
        <>
            <Box sx={{
                margin:'4rem',
            }}>
                <CustomModal text='Add a Client'/>
            {
                !loading && !error && <CustomizedTables data={data.clients}/>
            }
            </Box>
        </>
    );
}

export default Client;