import BoardContent from "../Boards/BoardContent/BoardContent";
import { Container } from "@mui/material";
import { mockData } from '../../apis/mock-data'
import Sidebar from "../workspaces/components/sidebar";
import { getWorkspaceById } from "../../utils/storage";
import { useParams } from "react-router-dom";


function BoardColumns() {
    const { type } = useParams();
    console.log(type);
    const workspace = getWorkspaceById(type);
    console.log(workspace);
    return (
        <div className="Workspace1">
            <Sidebar workspace={workspace} />
            <Container disableGutters maxWidth={false} sx={{ height: '90vh', width: '100%', backgroundColor: 'primary.main' }}>


                <BoardContent board={mockData?.board}></BoardContent>


            </Container>
        </div>




    );
}

export default BoardColumns;