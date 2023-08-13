import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import TippyCover from "../../../../../components/tippy/Tippy";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { MdDragHandle } from "react-icons/md";
import ListCards from './ListCards/ListCards';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { mapOrder } from '../../../../../utils/sort';

function Column({ column }) {
    const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id")

    const {
        attributes, listeners, setNodeRef, transform, transition, isDragging
    } = useSortable({
        id: column._id,
        data: { ...column }
    });
    //su dung CSS.Translate thay vi Transform de khong bi bien dang
    const dndKitColumnStyles = {
        // touchAction:'none',
        transform: CSS.Translate.toString(transform),
        transition,
        opacity:isDragging? 0.5 : undefined,


        // transform:isDragging? "rotate(2deg)" : undefined
        // height:"100%"
    };
    return (
        <div ref={setNodeRef}
            style={dndKitColumnStyles}
            {...attributes}
            >
            <Box
                {...listeners}
                sx={{
                    minWidth: '300px',
                    maxWidth: '300px',
                    backgroundColor: "#ebecf0",
                    ml: 2,
                    borderRadius: "6px",
                    height: "fit-content",
                    maxHeight: "89vh"
                }}>
                {/* header */}
                <Box sx={{
                    height: "36px",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Typography sx={{ fontWeight: "bold", cursor: "pointer" }}>{column?.title}</Typography>
                    <Box>
                        <TippyCover />
                    </Box>
                </Box>

                {/* content */}

                <ListCards cards={orderedCards}></ListCards>
                {/* footer */}
                <Box sx={{
                    height: "36px",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Button startIcon={<AiOutlineFolderAdd />} sx={{ fontSize: "14px", fontWeight: "bold", textTransform: "inherit" }}>Add new card</Button>

                    <MdDragHandle fontSize={20} cursor={'pointer'}></MdDragHandle>

                </Box>
            </Box>

        </div>
    )
}

export default Column