import React from 'react'
import { Box } from "@mui/material";

import Card from './Card/Card';

function ListCards({ cards }) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "column",
            gap: 1,
            p: 1.5,
            overflowX: "hidden",
            overflowY: "auto",
            maxHeight: "70vh"
        }}>
            {
                cards?.map(card => <Card key={card._id} card={card}/>)
            }

            {/* <Card></Card> */}



        </Box>
    )
}

export default ListCards