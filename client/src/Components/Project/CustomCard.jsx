import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

function CustomCard ( props ) {
    const navigate = useNavigate();
    const {item} = props;
    return (
        <>
            <Card sx={ { minWidth : 275,marginTop:"2rem", } }>
                <CardContent>
                    <Typography sx={ { fontSize : 24,fontStyle:'italic',fontWeight:'bold' } } color="text.secondary" gutterBottom>
                        { item.name }
                    </Typography>
                    <Box sx={{
                        display:"flex",
                        justifyContent:"flex-start",
                        alignItems:"center",
                        flexDirection:"row",
                        gap:".25rem",
                    }}>
                        <Typography variant="body2">
                            Status:
                        </Typography>
                        <Typography variant="body2" sx={{
                            color:"red"
                        }}>
                            {item.status}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button size="small" startIcon={<VisibilityIcon/>} onClick={()=>navigate(`/projects/${item.id}`)}>View</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default CustomCard;