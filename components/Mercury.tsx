import {
    AppBar,
    Box,
    Button,
    IconButton,
    Link,
    Toolbar,
    Typography,
} from "@mui/material";
import {
    DataUsage,
    ArrowRight,
    StoreMallDirectory,
    Menu,
    Fastfood,
    PeopleAlt,
    SupervisedUserCircle,
    AttachMoney,
} from "@mui/icons-material";
import styles from "../styles/Mercury.module.css";
import { styled } from "@mui/system";
interface RailButtonProps {
    name: string;
    icon: any;
    isMenu: boolean;
}
const MenuButton = styled(Button)`
    text-transform: none;
    color: rgba(0, 0, 0, 0.6);
    &:hover {
        background-color: rgba(27, 118, 212, 0.14);
        color: #1B76D4;
    }
`;
const RailButton = (props: RailButtonProps) => {
    return (
        <MenuButton className={styles.mercury_left_rail_button}>
            <div className={styles.mercury_left_rail_button_icon}>
                {props.icon}
            </div>
            <div className={styles.mercury_left_rail_button_name}>
                {props.name}
            </div>
            {props.isMenu && (
                <ArrowRight className={styles.mercury_left_rail_button_arrow} />
            )}
        </MenuButton>
    );
};
const MercuryLeftRail = () => {
    return (
        <Box className={styles.mercury_left_panel_nav}>
            <RailButton
                name={"My Store"}
                icon={<StoreMallDirectory />}
                isMenu={false}
            />
            <RailButton name={"Results"} icon={<DataUsage />} isMenu={true} />
            <RailButton name={"Menu"} icon={<Fastfood />} isMenu={true} />
            <RailButton name={"Customer"} icon={<PeopleAlt />} isMenu={true} />
            <RailButton
                name={"Employees"}
                icon={<SupervisedUserCircle />}
                isMenu={false}
            />
            <RailButton
                name={"Online Ordering"}
                icon={<AttachMoney />}
                isMenu={true}
            />
        </Box>
    );
};
export const MercuryGlobalHeader = () => {
    return (
        <Box className={styles.mercury_global_header}>
            <AppBar
                position="static"
                className={styles.mercury_global_header_internal}
            >
                <Toolbar className={styles.mercury_global_header_toolbar}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        className={styles.mercury_global_header_hamburger_menu}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        News
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default MercuryLeftRail;
