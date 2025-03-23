import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Color from '../constant/color'

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
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
                    <Text style={styles.pointText}>{roundsNumber}</Text>
                    번의 라운드 만에 숫자
                    <Text style={styles.pointText}>{userNumber}</Text>
                    를 맞혔습니다.
                </Text>
            </View>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const widthDimension = Dimensions.get('window').width

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: widthDimension < 380 ? 150 : 300,
        height: widthDimension < 380 ? 150 : 300,
        borderRadius: widthDimension < 380 ? 75 : 150,
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