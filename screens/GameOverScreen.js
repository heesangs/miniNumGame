import { View, Image, Text, StyleSheet, Dimensions, useWindowDimensions, ScrollView } from 'react-native';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Color from '../constant/color';

const widthDimension = Dimensions.get('window').width;

const ImageSize = {
    size: widthDimension < 320 ? 120 :
          widthDimension < 375 ? 160 :
          widthDimension < 414 ? 180 : 180,
};

const Font = {
    body: widthDimension < 320 ? 14 :
          widthDimension < 375 ? 16 :
          widthDimension < 414 ? 18 : 18,
    h1: widthDimension < 320 ? 16 :
        widthDimension < 375 ? 18 :
        widthDimension < 414 ? 20 : 20,
};

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();
    
    // 가로 모드 여부 확인
    const isLandscape = width > height;
    
    // 이미지 크기 계산 (가로 모드일 때 1/2 크기)
    const imageSize = isLandscape ? ImageSize.size / 2 : ImageSize.size;
    
    return (
        <ScrollView style={styles.screen} contentContainerStyle={styles.screenContent}>
            <View style={styles.rootContainer}>
                <Title>Game Over!!</Title>
                <View style={[
                    styles.imageContainer, 
                    { 
                        width: imageSize, 
                        height: imageSize, 
                        borderRadius: imageSize / 2,
                        margin: isLandscape ? 16 : 36
                    }
                ]}>
                    <Image
                        style={styles.image}
                        source={require('../images/test_img.png')}
                    />
                </View>
                <View>
                    <Text style={styles.summaryText}>당신의 핸드폰은{' '}
                        <Text style={styles.pointText}>{roundsNumber}</Text>{' '}
                        번의 라운드 만에 숫자{' '}
                        <Text style={styles.pointText}>{userNumber}</Text>{' '}
                        를 맞혔습니다.
                    </Text>
                </View>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    screenContent: {
        flexGrow: 1,
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: Color.primary800,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        color: Color.primary800,
        marginVertical: 24,
        fontSize: Font.body,
        textAlign: 'center',
    },
    pointText: {
        color: Color.accent500,
        fontSize: Font.h1,
    }
})