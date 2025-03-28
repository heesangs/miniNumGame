import { View, StyleSheet, Text } from 'react-native';
import Color from '../../constant/color';

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent's Guess: {guess}</Text>
        </View>
    )
}
export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Color.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Color.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        overflow: 'visible',
    }
})