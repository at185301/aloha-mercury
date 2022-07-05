import {
    AppBar,
    Box,
    Button,
    IconButton,
    Link,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../styles/Mercury.module.css";
const MercuryLeftRail = () => {
    return (
        <Box className={styles.mercury_left_panel_nav}>
            hi
            <div className={styles.mercury_left_rail}>
                hi
                <div>content</div>
            </div>
            <Link></Link>
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
                        <MenuIcon />
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
