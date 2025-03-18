import { View, StyleSheet } from 'react-native';
import Color from '../../constant/color'

function Card({ children }) {
    return (
        <View style={styles.inputContainer}>{children}</View>
    )
}

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        //가로축에 세로 정렬 센터로 하기
        marginHorizontal: 24,
        marginTop: 100,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Color.primary700,
        elevation: 32,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})

