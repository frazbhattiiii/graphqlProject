import { Button , styled , Typography } from "@mui/material";
import { Colors }                    from "./theme";
import Box from "@mui/material/Box";

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

export const FlexBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))
export const CustomDivider = styled(Box)(({theme}) => ({
    display:'flex',
    height:".25rem",
    width:"70%",
    backgroundColor:'lightgray',
}))