//  libraries
import styled from "styled-components";

//  hooks
import { useEffect, useState } from "react";

//  assets
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

//  styles
import { Button } from "../common/common.style";
import { palette } from "../common/palette";
import { Close } from "@mui/icons-material";

const Dropdown = styled.div``;

const DotsButton = styled(Button)`
  background-color: transparent;
  border-radius: 50%;
  color: ${palette.typography.textDark};
  padding: 0.3rem;
  align-self: flex-start;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative;
  top: 0;
  left: 10; */
  padding: 0.5rem;
  border-style: solid;
  border-color: ${palette.typography.textDark};
  border-width: 2px;
  border-radius: 10px;
  width: 7rem;
  height: fit-content;
  row-gap: 10px;
`;

const MenuItem = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;

  &:hover {
    background-color: rgba(200, 200, 200, 0.8);
    color: ${palette.typography.textDark};
  }
`;

const CommentDropdown = ({ comment }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Dropdown>
      <DotsButton onClick={handleClick}>
        <MoreVertIcon style={{ pointerEvents: "none" }} />
      </DotsButton>

      {open && (
        <Menu>
          <MenuItem>
            <EditIcon />
            Edit
          </MenuItem>
          <MenuItem>
            <DeleteIcon />
            Delete
          </MenuItem>
          <MenuItem>
            <CloseIcon />
            Close
          </MenuItem>
        </Menu>
      )}
    </Dropdown>
  );
};

export default CommentDropdown;
