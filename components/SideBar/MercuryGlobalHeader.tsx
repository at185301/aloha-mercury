/*
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
*/
import Box from "@mui/material/Box";
import styles from "./Styles.module.css";
const MercuryGlobalHeader = () => {
    return (
        <Box></Box>
    );
    }
    /*
const MercuryGlobalHeader = () => {
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
                        <Menu open={true} />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    ></Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};*/
export default MercuryGlobalHeader;
