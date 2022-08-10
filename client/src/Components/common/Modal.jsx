import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AddButton } from "../../styles";
import {useSelector,useDispatch} from "react-redux";
import AddClientForm from "../Client/AddClientForm";
import { closeDialogue , openDialogue } from "../../features/clientSlice/client";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CustomModal(props) {
    const {open}= useSelector(state=>state.client);
    const dispatch = useDispatch();
    const handleOpen = () => dispatch(openDialogue());
    const handleClose = () => dispatch(closeDialogue());

    return (
        <div>
           <AddButton onClick={handleOpen}>
               {props.text}
           </AddButton>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle sx={{
                                color:"#1AC073",
                                textAlign:'center',
                                fontSize: '2.5rem',
                            }}>Add a Client</DialogTitle>
                            <DialogContent>
                                <DialogContentText sx={{
                                    mb:2,
                                }}>
                                    Please fill out the form below to add a client.
                                </DialogContentText>
                                <AddClientForm/>
                            </DialogContent>
                        </Dialog>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
