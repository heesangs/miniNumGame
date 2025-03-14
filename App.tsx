import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Color from './constant/color';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }


  return (
    <LinearGradient
      colors={[Color.primary700, Color.accent500]}
      start={{ x: 0, y: 0 }} // 시작 지점 (왼쪽 상단)
      end={{ x: 1, y: 1 }} // 끝 지점 (오른쪽 하단)
      style={styles.rootBgColor}>
      <ImageBackground
        source={require('./images/screenshot.png')}
        // 이미지 사이즈가 커서 이미지 인식을 못함 
        resizeMode='cover'
        style={styles.rootBgColor}
        imageStyle={styles.imageStyle}

      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  rootBgColor: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.15,
  },
});