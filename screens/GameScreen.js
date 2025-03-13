import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(directioin) { //=> direction 'lower', 'greater' 
        if ((directioin === 'lower' && currentGuess < userNumber) ||
            (directioin === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert(
                '+,-를 잘못입력했어요.',
                '범위를 다시 확인하세요',
                [{ text: '죄송', style: 'cancel' }]
            )
            return;
        }
        if (directioin === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        console.log(minBoundary, maxBoundary);
        const newRanNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRanNum);
    }

    return (
        <View style={styles.container}>
            <Title>Opponent's GUESS</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
            </View>
            <View>
                <Text>data log</Text>
            </View>
        </View>
    )
};
export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    }
})