import React from 'react'
import { Box } from "@mui/material";

import Card from './Card/Card';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

function ListCards({ cards }) {
    return (
        <SortableContext items={cards?.map(c => c._id)} strategy={verticalListSortingStrategy}>
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
                    cards?.map(card => <Card key={card._id} card={card} />)
                }

                {/* <Card></Card> */}



            </Box>
        </SortableContext>
    )
}

export default ListCards