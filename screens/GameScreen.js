import {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GuessLogItem from '../components/game/GuessLogItem';

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

function GameScreen({userNumber, onGameOver}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRound, setGuessRound] = useState([initialGuess]);
  const {width, height} = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRound.length);
    }
  }, [currentGuess, userNumber, onGameOver, guessRound.length]); //해당 3개의 인자들중 값이 바뀌면 useEffect를 재실행한다.

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []); //빈 배열이므로 컴포넌트가 마운트 될때 한번만 실행.

  function nextGuessHandler(direction) {
    //=> direction 'lower', 'greater'
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('+,-를 잘못입력했어요.', '범위를 다시 확인하세요', [
        {text: '죄송', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRanNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRanNum);
    setGuessRound(prevGuessRounds => [newRanNum, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRound.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.titleSpace}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonFrame}>
          <View style={styles.buttonStyle}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="add-outline" size={16} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonStyle}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="remove-outline" size={16} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );
  if (width > 500) {
    content = (
      <>
        <InstructionText style={styles.titleSpace}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="add-outline" size={16} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonStyle}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="remove-outline" size={16} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <Title>Opponent's GUESS</Title>
      {content}
      <View style={styles.containerList}>
        {/* {guessRound.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList
          contentContainerStyle={{paddingBottom: 20}}
          style={{marginTop: 16}}
          data={guessRound}
          renderItem={itemData => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index} // 역순으로 라운드를 매기기 위한 로직
              guess={itemData.item} // 현재 항목의 추측값
            />
          )}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: -8,
  },
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    alignItems: 'center',
  },
  buttonFrame: {
    flexDirection: 'row',
    gap: 8,
  },
  buttonStyle: {
    flex: 1,
  },
  titleSpace: {
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
});
