import { Box, Button, TextField } from "@mui/material"
import Column from "./Column/Column"
import { IoMdAdd } from "react-icons/io"
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNewColumn } from "../../../../redux/slice/appReduce";

function ListColumns({ columns, handleColumnTitleChange,handleAddNewColumn,handleAddCardToColumn }) {
    const [onAddColumn, setOnAddColumn] = useState(false);
    const [titleNewColumn, setTitleNewColumn] = useState("")
    const wrapperRef = useRef(null);

    const handleAddColumn = () => {
        setOnAddColumn(!onAddColumn);
        console.log("add column");
    };
    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            // Kiểm tra xem sự kiện click chuột có xảy ra bên ngoài wrapper-add-card hay không
            setOnAddColumn(false);
        }
    };

    const AddNewColumn = () => {
        if (titleNewColumn) {
          
            handleAddNewColumn(titleNewColumn);
            setTitleNewColumn(""); 
            setOnAddColumn(false); 
        }
      };

    useEffect(() => {
        // Gắn sự kiện click vào window khi component được mount
        window.addEventListener("click", handleClickOutside);
        return () => {
            // Hủy bỏ sự kiện khi component bị unmount
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

   

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
                {columns?.map((column) => <Column key={column._id} column={column} handleColumnTitleChange={handleColumnTitleChange} handleAddCardToColumn={handleAddCardToColumn}/>)}




                {/* add new column btn */}
                <Box
                    ref={wrapperRef}
                    sx={{
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
                    <Button sx={{ textTransform: "inherit", color: "#fff", fontWeight: "bold", width: "100%", display: onAddColumn ? "none" : "flex", justifyContent: "flex-start" }} startIcon={<IoMdAdd />} onClick={handleAddColumn}>Add another list</Button>
                    {onAddColumn && <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <TextField sx={{ backgroundColor: "#fff", borderRadius: "6px" }} placeholder='Enter a title for column...' value={titleNewColumn} onChange={(e) => setTitleNewColumn(e.target.value)}></TextField>
                        <Button sx={{ backgroundColor: "#1976d2", color: "#fff", fontWeight: "bold", mt: 1 }} onClick={AddNewColumn}>Add Column</Button>
                    </Box>}
                </Box>

            </Box>
        </SortableContext>

    )
}

export default ListColumns