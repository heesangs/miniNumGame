import { StyleSheet, Text } from "react-native";
function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )

}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'PretendardStd-Light',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        lineHeight: 48,
        paddingHorizontal: 24,
        maxWidth: '80%',
        width: 300,
    }
})