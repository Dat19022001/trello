import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import { Card as MuiCard } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { MdDragHandle, MdOutlineAttachment } from "react-icons/md";
import { BiGroup, BiMessageAltDetail } from "react-icons/bi";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';


function Card({ card }) {

    const showCardActions = () => {
        return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
    }

    const {
        attributes, listeners, setNodeRef, transform, transition,isDragging
    } = useSortable({
        id: card._id,
        data: { ...card }
    });
    //su dung CSS.Translate thay vi Transform de khong bi bien dang
    const dndKitCardStyles = {
        // touchAction:'none',
        transform: CSS.Translate.toString(transform),
        transition,
        opacity:isDragging?0.5:undefined,
        border:isDragging? "1px solid #2ecc71" : undefined,

    };
    return (
        <MuiCard
            ref={setNodeRef}
            style={dndKitCardStyles}
            {...attributes}
            {...listeners}
            sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                overflow: "unset"
            }}>
            {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}

            <CardContent className="card-content" sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography sx={{ fontSize: "16px" }}>{card?.title}</Typography>
            </CardContent>

            {showCardActions() &&
                <CardActions sx={{ display: "flex", alignItems: "center" }}>
                    {!!card?.memberIds?.length && <Button size="small" startIcon={<BiGroup />}>{card?.memberIds?.length}</Button>}
                    {!!card?.comments?.length && <Button size="small" startIcon={<BiMessageAltDetail />}>{card?.comments?.length}</Button>}
                    {!!card?.attachments?.length && <Button size="small" startIcon={<MdOutlineAttachment />}>{card?.attachments?.length}</Button>}


                </CardActions>
            }
        </MuiCard>
    )
}

export default Card