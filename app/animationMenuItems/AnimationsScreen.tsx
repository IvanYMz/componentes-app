import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import AnimationsList from '../../components/AnimationsList';

export default function AnimationsScreen() {

    return (
        <View style={styles.container}>
            <Header headerTitle='Animations' goBack safe />
            <View style={styles.main}>
                <AnimationsList />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    main: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
