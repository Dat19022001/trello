import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "../../../utils/sort"
import {
    DndContext,
    MouseSensor,
    PointerSensor,
    TouchSensor,
    useSensor,
    useSensors,
    DragOverlay,
    defaultDropAnimationSideEffects
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import Column from "./ListColumns/Column/Column";
import Card from "./ListColumns/Column/ListCards/Card/Card";
const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN:"ACTIVE_DRAG_ITEM_TYPE_COLUMN",
    CARD:"ACTIVE_DRAG_ITEM_TYPE_CARD",

}

function BoardContent({ board }) {
    const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

    const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
    // nhan giu 250ms va dung sai cam ung thi moi kich hoat event
    const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })


    const sensors = useSensors(mouseSensor,touchSensor)

    const [orderedColumns, setOrderedColumns] = useState([])
    const [activeDragItemId, setActiveDragItemId] = useState(null)
    const [activeDragItemType, setActiveDragItemType] = useState(null)
    const [activeDragItemData, setActiveDragItemData] = useState(null)



    useEffect(() => {

        setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"))
    }, [board])


    const handleDragStart = (event) => {
        console.log("drag start",event)
        setActiveDragItemId(event?.active?.id)
        setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
        setActiveDragItemData(event?.active?.data?.current)
    }
    const handleDragEnd = (event) => {
        console.log("drag end", event)
        const { active, over } = event
        if (!over) return
        if (active.id !== over.id) {
            const oldIndex = orderedColumns.findIndex(c => c._id === active.id) //vitri cu
            const newIndex = orderedColumns.findIndex(c => c._id === over.id) //vitri moi

            const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex) // mang column sau khi drag
            const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
            // console.log("dndOrderedColumns",dndOrderedColumns,dndOrderedColumnsIds)
            setOrderedColumns(dndOrderedColumns)
        }
        setActiveDragItemId(null)
        setActiveDragItemType(null)
        setActiveDragItemData(null)
    }

    const dropAnimation = {
        sideEffects: defaultDropAnimationSideEffects({
          styles: {
            active: {
              opacity: '0.5',
            },
          },
        }),
      };

    return (

        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={sensors}>
            <Box sx={{
                backgroundColor: "primary.light",
                width: "100%",
                p: "10px 0"
            }}>

                <ListColumns columns={orderedColumns}></ListColumns>
                <DragOverlay dropAnimation={dropAnimation}>
                    {(!activeDragItemType) && null}
                    {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData}/>}
                    {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData}/>}

                </DragOverlay>

            </Box>
        </DndContext>
    );
}

export default BoardContent;