import { Button , styled , Typography } from "@mui/material";
import { Colors }                    from "./theme";

export const AddButton = styled ( Button ) ( ( { theme } ) => (
    {
        backgroundColor : 'red',
        color:'white',
        marginBottom:'2rem',
        '&:hover': {
            backgroundColor : 'green',
        }
    }
) )