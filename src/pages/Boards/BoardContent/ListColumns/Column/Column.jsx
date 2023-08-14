import React, { useState } from 'react'
import { Box, Button, Input, TextField, TextareaAutosize, Typography } from "@mui/material";
import TippyCover from "../../../../../components/tippy/Tippy";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { MdDragHandle } from "react-icons/md";
import ListCards from './ListCards/ListCards';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { mapOrder } from '../../../../../utils/sort';
import { useRef } from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Column({ column, handleColumnTitleChange, handleAddCardToColumn }) {
    const [onAdd, setOnAdd] = useState(false);
    const [textAreaValue, setTextAreaValue] = useState("")

    const wrapperRef = useRef(null);

    const handleAddCard = () => {
        setOnAdd(!onAdd);
        console.log("add card change");
    };
    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            // Kiểm tra xem sự kiện click chuột có xảy ra bên ngoài wrapper-add-card hay không
            setOnAdd(false);
        }
    };
    const onAddCard = () => {
        if (textAreaValue) {
            const cardId = "card-id-" + uuidv4()
            let newCard = { _id: cardId, boardId: 'board-id-01', columnId: 'column-id-01', title: textAreaValue, description: null, cover: null, memberIds: [], comments: [], attachments: [] }


            handleAddCardToColumn(column._id, newCard);
            setTextAreaValue("");
            setOnAdd(false);
            // list.cards.push(newCard)

        }
    }
    useEffect(() => {
        // Gắn sự kiện click vào window khi component được mount
        window.addEventListener("click", handleClickOutside);
        return () => {
            // Hủy bỏ sự kiện khi component bị unmount
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id")

    const [inputValue, setInputValue] = useState(column?.title)
    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Step 3
        handleColumnTitleChange(inputValue, column._id)
    };

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
        opacity: isDragging ? 0.5 : undefined,
        border: isDragging ? "1px solid #2ecc71" : undefined,

        // transform:isDragging? "rotate(2deg)" : undefined
        // height:"100%"
    };
    return (
        <div ref={setNodeRef}
            style={dndKitColumnStyles}
            {...attributes}
        >
            <Box
                ref={wrapperRef}
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
                    {/* <Typography sx={{ fontWeight: "bold", cursor: "pointer" }}>{column?.title}</Typography> */}
                    <Input sx={{ fontWeight: "bold", cursor: "pointer" }} value={inputValue} onChange={handleInputChange}></Input>
                    <Box>
                        <TippyCover />
                    </Box>
                </Box>

                {/* content */}

                <ListCards cards={orderedCards}></ListCards>
                {/* footer */}
                <Box sx={{
                    height: "fit-content",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Button startIcon={<AiOutlineFolderAdd />} sx={{ fontSize: "14px", fontWeight: "bold", textTransform: "inherit", display: onAdd ? "none" : "flex" }} onClick={handleAddCard}>Add new card</Button>
                    {onAdd && <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <TextField onChange={(e) => setTextAreaValue(e.target.value)} value={textAreaValue} sx={{ backgroundColor: "#fff" }} placeholder='Enter a title for card...'></TextField>
                        <Button sx={{ backgroundColor: "#1976d2", color: "#fff", fontWeight: "bold", mt: 1 }} onClick={onAddCard}>Add Card</Button>
                    </Box>}

                    <MdDragHandle fontSize={20} cursor={'pointer'}></MdDragHandle>

                </Box>
            </Box>

        </div>
    )
}

export default Column