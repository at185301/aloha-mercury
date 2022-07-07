import Button from "@mui/material/Button";
import styled from "@mui/system/styled";
const MenuButton = styled(Button)`
    text-transform: none;
    color: rgba(0, 0, 0, 0.6);
    &:hover {
        background-color: rgba(27, 118, 212, 0.14);
        color: #1b76d4;
    }
`;
export default MenuButton;
