import { StyleSheet, Text, Platform } from "react-native";

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
        textAlign: 'center',
        borderWidth: Platform.OS === 'android' ? 1 : 0,
        borderColor: Platform.select({
            android: 'rgba(255, 255, 255, 0.5)',
            ios: 'white'
        }),
        lineHeight: 48,
        paddingHorizontal: 24,
        maxWidth: '80%',
        width: 300,
    }
})