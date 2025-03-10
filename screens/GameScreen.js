import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameScreen({ userNumber }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    console.log("userNumber:", userNumber); // 디버깅용 로그 추가
    console.log("currentGuess:", currentGuess); // 디버깅용 로그 추가

    return (
        <View style={styles.container}>
            <Title>Opponent's GUESS</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Up and Down</Text>
                {/* +
                - */}
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