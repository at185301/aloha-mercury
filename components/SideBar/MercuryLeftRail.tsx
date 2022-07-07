import StoreMallDirectory from "@mui/icons-material/StoreMallDirectory";
import SupervisedUserCircle from "@mui/icons-material/SupervisedUserCircle";
import AttachMoney from "@mui/icons-material/AttachMoney";
import DataUsage from "@mui/icons-material/DataUsage";
import Fastfood from "@mui/icons-material/Fastfood";
import PeopleAlt from "@mui/icons-material/PeopleAlt";
import Box from "@mui/material/Box";
import RailButton from "./RailButton";
import styles from "./Styles.module.css";

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
export default MercuryLeftRail;
