import { StyleSheet, Animated } from 'react-native';

interface SquareFigureProps {
    opacityValue: Animated.Value;
};

export default function SquareFigure({ opacityValue }: SquareFigureProps) {
    return (
        <Animated.View style={{
            ...styles.square,
            opacity: opacityValue,
        }} />
    )
};

const styles = StyleSheet.create({
    square: {
        width: 180,
        height: 180,
        borderRadius: 8,
        backgroundColor: 'lightpink',
    },
});