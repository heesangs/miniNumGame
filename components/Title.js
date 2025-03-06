import { StyleSheet, Text } from "react-native";
import Color from "../constant/color";
function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: Color.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Color.accent500,
        lineHeight: 48,
    }
})