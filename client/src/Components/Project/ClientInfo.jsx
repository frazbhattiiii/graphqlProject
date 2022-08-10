import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PersonIcon from '@mui/icons-material/Person';
import { Divider } from "@mui/material";
import { CustomDivider } from "../../styles";
import EmailIcon from '@mui/icons-material/Email';
import { ClientInfoContainer , CustomBox } from "../../styles/ClientInfo";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function ClientInfo ( { client }) {
    console.log(client)
    if (!client) return null;
    return (
        <>
        <CustomBox>
        <ClientInfoContainer>
                <PersonIcon/>
                <Typography variant="h6">
                    {client.name}
                </Typography>
                <Divider sx={{
                    color:'lightgray'
                }}/>
            </ClientInfoContainer>
            <CustomDivider/>
            <ClientInfoContainer>
                <EmailIcon/>
                <Typography variant="h6">
                    {client.email}
                </Typography>

            </ClientInfoContainer>
            <CustomDivider/>
            <ClientInfoContainer>
                <LocalPhoneIcon/>
                <Typography variant="h6">
                    {client.phone}
                </Typography>
            </ClientInfoContainer>
            <CustomDivider/>
        </CustomBox>
        </>
    );
}

export default ClientInfo;