import {makeStyles} from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        color: theme.colors.content,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        marginVertical: theme.spacing.lg,
    },
    calendar: {
        backgroundColor: theme.colors.background,
    }
}));

export default useStyles;