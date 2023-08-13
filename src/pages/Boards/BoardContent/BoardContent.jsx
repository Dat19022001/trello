import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "../../../utils/sort"
import { DndContext } from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';


function BoardContent({ board }) {


    const [orderedColumns, setOrderedColumns] = useState([])
    useEffect(() => {

        setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"))
    }, [board])

    const handleDragEnd = (event) => {
        console.log("drag end", event)
        const { active, over } = event

        if (active.id != over.id) {
            const oldIndex = orderedColumns.findIndex(c => c._id === active.id) //vitri cu
            const newIndex = orderedColumns.findIndex(c => c._id === over.id) //vitri moi

            const dndOrderedColumns = arrayMove(orderedColumns,oldIndex,newIndex) // mang column sau khi drag
            const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
            // console.log("dndOrderedColumns",dndOrderedColumns,dndOrderedColumnsIds)
            setOrderedColumns(dndOrderedColumns)
        }
    }
    return (

        <DndContext onDragEnd={handleDragEnd}>
            <Box sx={{
                backgroundColor: "primary.light",
                width: "100%",
                p: "10px 0"
            }}>

                <ListColumns columns={orderedColumns}></ListColumns>

            </Box>
        </DndContext>
    );
}

export default BoardContent;