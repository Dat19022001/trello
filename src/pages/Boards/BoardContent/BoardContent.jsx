import { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
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
    defaultDropAnimationSideEffects,
    closestCorners,
    closestCenter,
    pointerWithin,
    rectIntersection,
    getFirstCollision
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { cloneDeep } from "lodash";
import Column from "./ListColumns/Column/Column";
import Card from "./ListColumns/Column/ListCards/Card/Card";
const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
    CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",

}

function BoardContent({ board }) {
    const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

    const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
    // nhan giu 250ms va dung sai cam ung thi moi kich hoat event
    const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })


    const sensors = useSensors(mouseSensor, touchSensor)

    const [orderedColumns, setOrderedColumns] = useState([])
    const [activeDragItemId, setActiveDragItemId] = useState(null)
    const [activeDragItemType, setActiveDragItemType] = useState(null)
    const [activeDragItemData, setActiveDragItemData] = useState(null)
    // luu column ban dau truoc khi keo tha vao satate
    const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] = useState(null)

    const lastOverId = useRef(null)

    useEffect(() => {

        setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"))
    }, [board])
    // console.log("orderedColumns",orderedColumns)
    const handleColumnTitleChange = (newTitle, id) => {
        // Tìm cột trong orderedColumns có id tương ứng và cập nhật tiêu đề mới
        setOrderedColumns(prevColumns => {
            const nextColumns = prevColumns.map(column => {
                if (column._id === id) {
                    return { ...column, title: newTitle };
                }
                return column;
            });
            return nextColumns;
        });
    };

    const handleAddNewColumn = (titleNewColumn) => {

        const lengthColumn = orderedColumns.length
        const cardOrderId = "card-id-" + uuidv4()
        let newColumn = {
            _id: "column-id-0" + (lengthColumn + 1),
            boardId: 'board-id-01',
            title: titleNewColumn,
            cardOrderIds: [cardOrderId],
            cards: [

                { _id: cardOrderId, boardId: 'board-id-01', columnId: "column-id-0" + (lengthColumn + 1), title: 'Title of card' + uuidv4(), description: null, cover: null, memberIds: [], comments: [], attachments: [] },

            ]

        }

        const newColumns = [...orderedColumns, newColumn]
        setOrderedColumns(newColumns)
        console.log("newLists", newColumns)


    }

    const handleDeleteColumn = (columnId) => {
        setOrderedColumns(prevColumns => prevColumns.filter(column => column._id !== columnId));
    };

    const handleAddCardToColumn = (columnId, newCard) => {
        // Tìm danh sách cần cập nhật
        const updatedLists = orderedColumns.map((column) => {
            if (column._id === columnId) {
                return {
                    ...column,
                    cardOrderIds: [...column.cardOrderIds, newCard._id],
                    cards: [...column.cards, newCard],
                };
            }
            return column;
        });

        // Cập nhật danh sách mới
        setOrderedColumns(updatedLists);
        console.log("updatedLists", updatedLists)
    };
    const findColumnByCardId = (cardId) => {
        return orderedColumns.find(column => column?.cards?.map(card => card._id)?.includes(cardId))
    }
    const moveCardBetweenDifferentColumn = (
        overColumn,
        overCardId,
        active,
        over,
        activeColumn,
        activeDraggingCardId,
        activeDraggingCardData
    ) => {
        setOrderedColumns(prevColumns => {
            const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)

            let newCardIndex;
            const isBelowOverItem = active.rect.current.translated &&
                active.rect.current.translated.top > over.rect.top + over.rect.height;

            const modifier = isBelowOverItem ? 1 : 0;

            newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1;
            const nextColumns = cloneDeep(prevColumns)
            const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
            const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)

            if (nextActiveColumn) {
                // xoá card kéo ở cái column cũ
                nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)
                // cap nhat lai mang card orderId
                nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
            }

            if (nextOverColumn) {
                // ktra xem card dang keo da ton tai o overcolumn hay chua.. neu co thi xoa
                nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)

                const rebuild_draggingCardData = {
                    ...activeDraggingCardData,
                    columnId: nextOverColumn._id
                }
                // them card dang keo vao vi tri moi
                nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, rebuild_draggingCardData)
                nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)

            }

            return nextColumns
        })
    }
    const handleDragStart = (event) => {
        console.log("drag start", event)
        setActiveDragItemId(event?.active?.id)
        setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
        setActiveDragItemData(event?.active?.data?.current)

        if (event?.active?.data?.current?.columnId) {
            setOldColumnWhenDraggingCard(findColumnByCardId(event?.active?.id))
        }
    }
    const handleDragOver = (event) => {
        // console.log("handleDragOVer", event)

        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return

        const { active, over } = event
        if (!active || !over) return

        const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active
        const { id: overCardId } = over

        const activeColumn = findColumnByCardId(activeDraggingCardId)
        const overColumn = findColumnByCardId(overCardId)

        if (!activeColumn || !overColumn) return

        if (activeColumn._id !== overColumn._id) {
            moveCardBetweenDifferentColumn(
                overColumn,
                overCardId,
                active,
                over,
                activeColumn,
                activeDraggingCardId,
                activeDraggingCardData
            )
        }

    }
    const handleDragEnd = (event) => {

        console.log("drag end", event)
        const { active, over } = event
        if (!over) return
        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {

            const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active
            const { id: overCardId } = over

            const activeColumn = findColumnByCardId(activeDraggingCardId)
            const overColumn = findColumnByCardId(overCardId)

            if (!activeColumn || !overColumn) return

            if (oldColumnWhenDraggingCard._id !== overColumn._id) {
                moveCardBetweenDifferentColumn(
                    overColumn,
                    overCardId,
                    active,
                    over,
                    activeColumn,
                    activeDraggingCardId,
                    activeDraggingCardData
                )
            } else {
                const oldCardIndex = oldColumnWhenDraggingCard?.cards?.findIndex(c => c._id === activeDragItemId) //vitri cu
                const newCardIndex = overColumn?.cards?.findIndex(c => c._id === overCardId) //vitri moi

                const dndOrderedCards = arrayMove(oldColumnWhenDraggingCard?.cards, oldCardIndex, newCardIndex) // mang column sau khi drag

                setOrderedColumns(prevColumns => {
                    const nextColumns = cloneDeep(prevColumns)
                    const targetColumn = nextColumns.find(c => c._id === overColumn._id)

                    targetColumn.cards = dndOrderedCards
                    targetColumn.cardOrderIds = dndOrderedCards.map(card => card._id)
                    return nextColumns
                })
            }

        }
        // keo tha column trong 1 board
        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
            if (active.id !== over.id) {
                const oldColumnIndex = orderedColumns.findIndex(c => c._id === active.id) //vitri cu
                const newColumnIndex = orderedColumns.findIndex(c => c._id === over.id) //vitri moi

                const dndOrderedColumns = arrayMove(orderedColumns, oldColumnIndex, newColumnIndex) // mang column sau khi drag
                const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
                // console.log("dndOrderedColumns",dndOrderedColumns,dndOrderedColumnsIds)
                setOrderedColumns(dndOrderedColumns)
            }
        }


        setActiveDragItemId(null)
        setActiveDragItemType(null)
        setActiveDragItemData(null)
        setOldColumnWhenDraggingCard(null)
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
    const collisionDetectionStrategy = useCallback((args) => {

        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
            return closestCenter({ ...args })
        }
        // tim cac diem giao nhau voi con tro
        const pointerIntersections = pointerWithin(args)
        const intersections = !!pointerIntersections?.length ? pointerIntersections : rectIntersection(args)

        let overId = getFirstCollision(intersections, "id")

        if (overId) {
            const checkColumn = orderedColumns.find(column => column._id === overId)
            if (checkColumn) {
                overId = closestCenter({
                    ...args,
                    droppableContainers: args.droppableContainers
                        .filter(container => {
                            return (container.id !== overId) && (checkColumn?.cardOrderIds?.includes(container.id))
                        })
                })[0]?.id
            }
            lastOverId.current = overId
            return [{ id: overId }]
        }

        return lastOverId.current ? [{ id: lastOverId.current }] : []
    }, [activeDragItemType, orderedColumns])
    return (

        <DndContext onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd} sensors={sensors}
            // collisionDetection={closestCenter}
            collisionDetection={collisionDetectionStrategy}
        >
            <Box sx={{
                backgroundColor: "primary.main",
                width: "100%",
                p: "10px 0"
            }}>

                <ListColumns columns={orderedColumns} handleColumnTitleChange={handleColumnTitleChange} handleAddNewColumn={handleAddNewColumn} handleAddCardToColumn={handleAddCardToColumn} handleDeleteColumn={handleDeleteColumn}></ListColumns>
                <DragOverlay dropAnimation={dropAnimation}>
                    {(!activeDragItemType) && null}
                    {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData} />}
                    {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData} />}

                </DragOverlay>

            </Box>
        </DndContext>
    );
}

export default BoardContent;