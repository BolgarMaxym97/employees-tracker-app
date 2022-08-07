import {makeStyles} from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: theme.colors.background,
        color: theme.mode === "light" ? "#000" : "#fff"
    },
}));

export default useStyles;