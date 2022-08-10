import { useState } from "react";
import { Stack, Box, TextField, Select } from "@mui/material";
import { motion } from "framer-motion";
import * as React from "react";
import { AddButton } from "../../styles";
import { useDispatch } from "react-redux";
import { closeDialogue } from "../../features/clientSlice/client";
import { ADD_CLIENT } from "../../Mutations/ClientMutations";
import { GET_CLIENTS } from "../../Queries/ClientQueries";
import { useMutation } from "@apollo/client";

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
    opacity: 1,
    y: 0,
    transition: {
        duration: 0.6,
        ease: easing,
        delay: 0.16,
    },
};

const AddClientForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const onSubmit = (e) => {
        console.log(name,email,phone)
        e.preventDefault();

        if (name === '' || email === '' || phone === '') {
            return alert('Please fill in all fields');
        }

        addClient(name, email, phone);
        dispatch(closeDialogue());

        setName('');
        setEmail('');
        setPhone('');
    };

    const [addClient] = useMutation(ADD_CLIENT, {
        variables: {name,email,phone},
        update(cache, { data: { addClient } }) {
            const { clients } = cache.readQuery({ query: GET_CLIENTS });

            cache.writeQuery({
                                 query: GET_CLIENTS,
                                 data: { clients: [...clients, addClient] },
                             });
        },

    });

    return (
        <>
                <form autoComplete="on" onSubmit={onSubmit}>
                    <Stack spacing={3}>
                        <Stack
                            component={motion.div}
                            initial={{ opacity: 0, y: 60 }}
                            animate={animate}
                            direction={{ xs: "column", sm: "row" }}
                            spacing={2}
                        >
                            <TextField
                                fullWidth
                                label="Name"
                                id='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Stack>

                        <Stack
                            spacing={2}
                            component={motion.div}
                            initial={{ opacity: 0, y: 60 }}
                            direction={{ xs: "column", sm: "row" }}
                            animate={animate}
                        >
                            <TextField
                                fullWidth
                                autoComplete="username"
                                type="email"
                                label="Email address"
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                fullWidth
                                autoComplete="phone"
                                type="number"
                                label="Phone Number"
                                id='phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={animate}
                        >
                        </Box>
                    </Stack>
                    </Stack>
                    <AddButton type='submit' sx={{
                        marginTop:"2rem",
                    }}>Add a Client</AddButton>
                </form>
        </>
    );
};

export default AddClientForm;