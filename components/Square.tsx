import { StyleSheet, Animated, Text } from 'react-native';

interface AnimatedSquareProps {
    properties?: {
        opacityValue?: Animated.Value;
        translateYValue?: Animated.Value | number;
        rotateValue?: Animated.Value;
        rotationDegrees?: number;
    };
}

export default function Square({ properties }: AnimatedSquareProps) {
    const { opacityValue, translateYValue, rotateValue, rotationDegrees } = properties || {};

    const spin = rotateValue?.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', `${rotationDegrees}deg`],
    });

    return (
        <Animated.View style={[
            styles.square,
            {
                opacity: opacityValue ? opacityValue : 1,
                transform: [{
                    translateY: translateYValue ? translateYValue : 0,
                }, {
                    rotate: spin ? spin : '0deg',
                },
                ],
            }
        ]}>
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    square: {
        width: 75,
        height: 75,
        borderRadius: 8,
        backgroundColor: 'lightpink',
    },
});
