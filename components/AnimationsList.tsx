import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Square from './Square';
import animationsData from '../constants/animationsData';
import { colors } from '../config/theme/theme';

export default function AnimationsList() {
    const animations = animationsData().animations;
    return (
        <FlatList
            data={animations}
            numColumns={3}
            contentContainerStyle={styles.container}
            renderItem={({ item }) => {
                return (
                    <View style={styles.itemStyle}>
                        <Square properties={item.properties} />
                        <TouchableOpacity style={styles.animationButton} onPress={() => { item.function({ animationValue: item.ref }) }} >
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    itemStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '33.33%',
        marginVertical: 20,
        gap: 20,
    },
    animationButton: {
        padding: 8,
        borderRadius: 4,
        backgroundColor: colors.background,
    },
});

