import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Color from './constant/color';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRound, setGuessRound] = useState(0);

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber); //setUserNumber가 실행되면 userNumber가 업데이트된다. 
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds: number) {
    setGameIsOver(true);
    setGuessRound(numberOfRounds);
  }

  function restartHandler() {
    setUserNumber(null);
    setGuessRound(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRound} onStartNewGame={restartHandler} />;
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
  );
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