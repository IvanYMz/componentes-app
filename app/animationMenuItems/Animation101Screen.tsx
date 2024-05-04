import { useRef } from 'react';
import { Animated, View, StyleSheet, } from 'react-native';
import SquareFigure from '../../components/SquareFigure';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';

export default function Animation101Screen() {
    const fadeAnimation = useRef(new Animated.Value(0)).current;

    function fadeIn() {
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    function fadeOut() {
        Animated.timing(fadeAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.container}>
            <Header headerTitle='Animation 01' goBack safe />
            <View style={styles.main}>
                <SquareFigure opacityValue={fadeAnimation} />
                <View style={styles.buttonsContainer}>
                    <CustomButton buttonText='fadeIn' onPressFunction={fadeIn} />
                    <CustomButton buttonText='fadeOut' onPressFunction={fadeOut} />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    main: {
        flex: 1,
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 10,  
    },
});