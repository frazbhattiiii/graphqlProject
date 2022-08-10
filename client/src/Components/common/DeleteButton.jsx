import React from 'react';
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../../Mutations/ClientMutations";
import { GET_CLIENTS } from "../../Queries/ClientQueries";
const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor:"red",
    color:"white",
    '&:hover': {
        backgroundColor:'green',
    }
}));
function DeleteButton ( props ) {
    const [deleteClient] = useMutation(DELETE_CLIENT,{
        variables:{id:props.id},
        update(cache,{data:{deleteClient}}){
            const {clients} = cache.readQuery({query:GET_CLIENTS});
            cache.writeQuery({
                query:GET_CLIENTS,
                data:{
                    clients:clients.filter(client=>client.id!==deleteClient.id)
                }
            })
        }
    });
    return (
       <StyledButton endIcon={<DeleteIcon/>} onClick={deleteClient}/>
    );
}

export default DeleteButton;