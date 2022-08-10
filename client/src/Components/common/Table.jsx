import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell , { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../../Mutations/ClientMutations";
import DeleteButton from "./DeleteButton";

const StyledTableCell = styled ( TableCell ) ( ( { theme } ) => (
    {
        [ `&.${ tableCellClasses.head }` ] : {
            backgroundColor : theme.palette.common.black ,
            color : theme.palette.common.white ,
        } ,
        [ `&.${ tableCellClasses.body }` ] : {
            fontSize : 14 ,
        } ,
    }
) );
const StyledButton = styled ( Button ) ( ( { theme } ) => (
    {
        backgroundColor : "red" ,
        color : "white" ,
        '&:hover' : {
            backgroundColor : 'green' ,
        }
    }
) );

const StyledTableRow = styled ( TableRow ) ( ( { theme } ) => (
    {
        '&:nth-of-type(odd)' : {
            backgroundColor : theme.palette.action.hover ,
        } ,
        // hide last border
        '&:last-child td, &:last-child th' : {
            border : 0 ,
        } ,
    }
) );
export default function CustomizedTables ( props ) {
    const data = props.data;
    return (
        <TableContainer component={ Paper }>
            <Table sx={ { minWidth : 700 } } aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Email</StyledTableCell>
                        <StyledTableCell>Phone</StyledTableCell>
                        <StyledTableCell/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { data.map ( ( row , index ) => (
                        <StyledTableRow key={ index }>
                            <StyledTableCell component="th" scope="row">
                                { row.name }
                            </StyledTableCell>
                            <StyledTableCell>{ row.email }</StyledTableCell>
                            <StyledTableCell>{ row.phone }</StyledTableCell>
                            <StyledTableCell>
                                <Box sx={ {
                                    display : 'flex' ,
                                    justifyContent : 'center' ,
                                    alignItems : 'center' ,
                                } }>
                                    <DeleteButton id={ row.id }/>
                                </Box>
                            </StyledTableCell>
                        </StyledTableRow>

                    ) ) }
                </TableBody>
            </Table>
        </TableContainer>
    );
}
