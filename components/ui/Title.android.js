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
        textAlign: 'center', // 안드로이드: 가운데 정렬
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        lineHeight: 48,
        paddingHorizontal: 24,
        maxWidth: '80%',
        width: 300,
    }
}) 