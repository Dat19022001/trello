import { Box, Button } from "@mui/material"
import Column from "./Column/Column"
import { IoMdAdd } from "react-icons/io"
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';

function ListColumns({ columns }) {
    return (
        <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
            <Box sx={{
                backgroundColor: "inherit",
                width: '100%',
                height: '100%',
                display: 'flex',
                overflowX: "auto",
                overflowY: "hidden"

            }}>
                {columns?.map((column) => <Column key={column._id} column={column} />)}




                {/* add new column btn */}
                <Box sx={{
                    minWidth: "200px",
                    maxWidth: "200px",
                    mx: 2,
                    borderRadius: "10px",
                    height: "fit-content",
                    backgroundColor: "#ffffff3d",
                    px: 2,
                    py: 1,
                    cursor: "pointer"
                }}>
                    <Button sx={{ textTransform: "inherit", color: "#fff", fontWeight: "bold", width: "100%", display: "flex" }} startIcon={<IoMdAdd />}>Add another list</Button>
                </Box>

            </Box>
        </SortableContext>

    )
}

export default ListColumns