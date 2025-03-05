import { TextInput, View, StyleSheet } from 'react-native'

import PrimaryButton from '../components/PrimaryButton';
function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                spellCheck={false}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}
export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        //가로축에 세로 정렬 센터로 하기
        marginHorizontal: 24,
        marginTop: 100,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#4e0329',
        elevation: 32,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    buttonContainer: {
        flex: 1,
    },
    numberInput: {
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})