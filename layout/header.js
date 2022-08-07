import React from "react";
import {Header, useThemeMode} from "@rneui/themed";
import useStyles from "./styles";

export default function HeaderComponent() {
    const {setMode, mode} = useThemeMode();
    const styles = useStyles();
    return (
        <Header containerStyle={styles.header}
                centerComponent={{
                    text: 'Employees Tracker',
                    style: {
                        color: styles.header.color,
                        fontSize: 20
                    }
                }}
                rightComponent={{
                    icon: 'lightbulb',
                    color: styles.header.color,
                    onPress: () => setMode(mode === "dark" ? "light" : "dark")
                }}/>
    );
}
