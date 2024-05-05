import { StyleSheet, Animated, Text } from 'react-native';

interface AnimatedSquareProps {
    opacityValue?: Animated.Value;
    text?: string; 
};

export default function AnimatedSquare({ opacityValue, text }: AnimatedSquareProps) {
    return (
        <Animated.View style={{
            ...styles.square,
            opacity: opacityValue,
        }}>
            <Text style={styles.text}>{text}</Text>
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    square: {
        width: 80,
        height: 80,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightpink',
    },
    text: {
        fontSize: 20,
        color: '#222',
    },
});