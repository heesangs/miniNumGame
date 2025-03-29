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
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left', // iOS: 왼쪽 정렬
        borderWidth: 0,
        borderColor: 'white',
        lineHeight: 48,
        paddingHorizontal: 24,
        maxWidth: '80%',
        width: 300,
    }
}) 