import React from 'react';
import Client from "../Components/Client/Client";
import ResponsiveAppBar from "../Components/AppBar";
import Box from "@mui/material/Box";

function Home ( props ) {
    return (
        <>
            <ResponsiveAppBar/>
            <Box sx={{
                margin:'4rem',
            }}
            />
            <Client/>
        </>
    );
}

export default Home;