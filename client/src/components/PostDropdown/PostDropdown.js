//  libraries
import styled from "styled-components";

//  hooks
import { useState } from "react";
import { usePost } from "../../hooks/usePost";
import { useDeletePost } from "./hooks/useDeletePost";

//  assets
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

//  styles
import { Button } from "../common/common.style";
import { palette } from "../common/palette";

const Dropdown = styled.div``;

const DotsButton = styled(Button)`
  background-color: transparent;
  border-radius: 50%;
  color: ${palette.typography.textDark};
  padding: 0.3rem;
  align-self: flex-start;
  justify-content: center;
`;

const MenuBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(200, 200, 200, 0);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 0.5rem;
  border-style: solid;
  border-color: ${palette.typography.textDark};
  border-width: 2px;
  border-radius: 10px;
  width: 7rem;
  height: fit-content;
  background-color: rgba(210, 210, 210, 0.9);
  z-index: 2;
`;

const MenuItem = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
  border-radius: 20px;
  padding: 0.5rem;
  color: ${palette.typography.textDark};

  &:hover {
    background-color: rgba(230, 230, 230, 0.9);
  }
`;

const PostDropdown = ({ post, setIsEditing }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { openEditor, setOpenEditor } = usePost();
  const deletePost = useDeletePost();

  const handleOpen = () => {
    setOpenDropdown(!openDropdown);
    setOpenEditor({
      isEditing: true,
      type: "post",
    });
  };

  const handleDelete = () => {
    deletePost();
  };

  const handleEdit = () => {
    setIsEditing(true);
    setOpenDropdown(false);
    setOpenEditor({
      isEditing: true,
      type: "post",
    });
  };

  return (
    <Dropdown>
      <DotsButton disabled={openEditor.isEditing} onClick={handleOpen}>
        <MoreVertIcon style={{ pointerEvents: "none" }} />
      </DotsButton>

      {openDropdown && (
        <>
          <MenuBackground onClick={handleOpen} />
          <Menu>
            <MenuItem onClick={handleEdit}>
              <EditIcon style={{ pointerEvents: "none" }} />
              Edit
            </MenuItem>
            <MenuItem onClick={handleDelete}>
              <DeleteIcon style={{ pointerEvents: "none" }} />
              Delete
            </MenuItem>
            <MenuItem onClick={handleOpen}>
              <CloseIcon style={{ pointerEvents: "none" }} />
              Close
            </MenuItem>
          </Menu>
        </>
      )}
    </Dropdown>
  );
};

export default PostDropdown;