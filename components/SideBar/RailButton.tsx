import ArrowRight from "@mui/icons-material/ArrowRight";
import styles from "./Styles.module.css";
import MenuButton from "./MenuButton";
export interface RailButtonProps {
    name: string;
    icon: any;
    isMenu: boolean;
}
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
export default RailButton;
