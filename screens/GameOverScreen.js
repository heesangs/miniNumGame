import { View, Image, Text, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Color from '../constant/color'

function GameOverScreen() {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!!</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../images/test_img.png')}
                />
            </View>
            <View>
                <Text style={styles.summaryText}>당신의 핸드폰은
                    <Text style={styles.pointText}>X</Text>
                    번의 라운드 만에 숫자
                    <Text style={styles.pointText}>Y</Text>
                    를 맞혔습니다.
                </Text>
            </View>
            <PrimaryButton>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Color.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        color: Color.primary800,
        marginVertical: 24,
        fontSize: 24,
        textAlign: 'center',
    },
    pointText: {
        color: Color.accent500,
    }
})