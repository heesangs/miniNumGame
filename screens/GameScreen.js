import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

function GameScreen() {
    return (
        <View style={styles.container}>
            <Title>Opponent's GUESS</Title>
            {/* GUESS */}
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