import { View, Text, StyleSheet, Animated } from 'react-native';
import Header from '../../components/Header';
import { useRef } from 'react';
import { PanResponder } from 'react-native';

export default function AnimationDraggableScreen() {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x, // x,y are Animated.Value
                dy: pan.y,
            },
        ], {
            useNativeDriver: false,
        }),
        onPanResponderRelease: () => {
            Animated.spring(
                pan, // Auto-multiplexed
                { toValue: { x: 0, y: 0 }, useNativeDriver: false }, // Back to zero
            ).start();
        },
    });

    return (
        <View style={styles.container}>
            <Header headerTitle='Draggable Square' goBack safe />
            <View style={styles.container}>
                <Animated.View
                    {...panResponder.panHandlers}
                    style={{ justifyContent: 'center', alignItems: 'center', ...pan.getLayout(), ...styles.box }}
                >
                    <Text style={styles.text}> Dragg me! </Text>
                </Animated.View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        backgroundColor: 'lightpink',
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    text: {
        fontSize: 18,
        color: '#222',
    },
});