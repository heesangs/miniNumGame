import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
    function pressableHandler() {
        console.log('pressed!')
    }
    return (
        <View style={styles.buttonOutterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer
                }
                android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
                onPress={pressableHandler}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}
export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOutterContainer: {
        borderRadius: 28,
        overflow: 'hidden',
        marginVertical: 8,
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    pressed: {
        opacity: 0.8,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
})