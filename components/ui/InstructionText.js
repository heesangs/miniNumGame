import { View, Text, StyleSheet } from 'react-native';
import Color from '../../constant/color';

function InstructionText({ children, style }) {
    return (
        <View>
            <Text style={[styles.instructionText, style]}>{children}</Text>
        </View>
    )
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Color.accent500,
        fontSize: 24,
    },
})