import React, {useState} from "react";
import {View} from "react-native";
import {Text} from "@rneui/themed";
import DatePicker from "react-native-modern-datepicker";
import useStyles from "./styles";

export default function MainScreen() {
    const styles = useStyles();
    const [selectedDate, setSelectedDate] = useState('');

    return (
        <View style={styles.container}>
            <DatePicker
                onSelectedChange={date => setSelectedDate(date)}
                style={styles.calendar}
            />
            <Text h3>Start Using RNE </Text>
            <Text style={styles.text}>
                Open up App.tsx to start working on your app!
            </Text>
        </View>
    );
}

;
