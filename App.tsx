
import { StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient
      colors={['#4e0329', '#ddb52f']}
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
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootBgColor: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.15,
  },
});