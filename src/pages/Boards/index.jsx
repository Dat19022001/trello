import BoardContent from "../Boards/BoardContent/BoardContent";
import {  Container } from "@mui/material";
import {mockData} from '../../apis/mock-data'


function Board() {
    return (
        <Container disableGutters maxWidth={false} sx={{ height: '90vh', width: '100%', backgroundColor: 'primary.main' }}>


            <BoardContent board={mockData?.board}></BoardContent>


        </Container>
    );
}

export default Board;