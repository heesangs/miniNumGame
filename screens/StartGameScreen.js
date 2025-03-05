import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native'

import PrimaryButton from '../components/PrimaryButton';
function StartGameScreen() {
    const [enteredNumber, setEnteredNumber] = useState('')
    function numberInputHandler(enterdText) {
        setEnteredNumber(enterdText)
    }
    function resetInputHandler() {
        setEnteredNumber('')
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        Alert.alert(
            '잘못된 번호입니다.',
            '숫자는 1~99사이만 입력해야합니다.',
            [{ text: '확인', style: 'destructive', onPress: resetInputHandler }]
        )
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            return; //여기에서 리턴은 '취소'를 의미한다.
        }
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                spellCheck={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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