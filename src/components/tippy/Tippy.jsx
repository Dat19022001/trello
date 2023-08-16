import * as React from 'react';
import "./tippy.scss"

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

import { BiMenuAltLeft } from 'react-icons/bi';
import { RiScissorsCutLine } from 'react-icons/ri';
import { AiOutlineCloud, AiOutlineCopy, AiOutlineFolderAdd } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { Button } from '@mui/material';

function TippyCover({columnId,handleDeleteColumn}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const deleteColumn = () => {
        handleDeleteColumn(columnId)
    }
    return (
        <div>


            <BiMenuAltLeft id="basic-button-icon"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>

            </BiMenuAltLeft>

            <Menu
                id="basic-menu-icon"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                <MenuItem sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <ListItemIcon>
                        <AiOutlineFolderAdd></AiOutlineFolderAdd>
                    </ListItemIcon>
                    <ListItemText>Add new card</ListItemText>

                </MenuItem>

                <MenuItem sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <ListItemIcon>
                        <RiScissorsCutLine></RiScissorsCutLine>
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>

                </MenuItem>

                <MenuItem sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <ListItemIcon>
                        <AiOutlineCopy></AiOutlineCopy>
                    </ListItemIcon>
                    <ListItemText>Copy</ListItemText>

                </MenuItem>

                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <MdDeleteForever></MdDeleteForever>
                    </ListItemIcon>
                    <ListItemText>
                        <Button sx={{textTransform:"inherit"}} onClick={deleteColumn}>Remove this column</Button>
                    </ListItemText>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default TippyCover;