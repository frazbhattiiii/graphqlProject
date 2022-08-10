import { styled } from "@mui/material";
import Box from "@mui/material/Box";


export const CustomBox = styled(Box)(({theme}) => ({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'column',
}))
export const ClientInfoContainer = styled(Box)(({theme}) => ({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row',
    gap:'.5rem',
}))