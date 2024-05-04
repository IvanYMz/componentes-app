import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../config/theme/theme';
import { router } from 'expo-router';
import Ionicon from 'react-native-vector-icons/Ionicons';

interface MenuItemProps {
    name: string,
    icon: string,
    path: string;
};

export default function MenuItem({ name, icon, path }: MenuItemProps) {
    return (
        <TouchableOpacity onPress={() => { router.push(path) }}>
            <View style={styles.itemSecction}>
                <View style={styles.itemInfo}>
                    <Ionicon name={icon} size={25} color={colors.primary} />
                    <Text style={styles.itemNameText}>{name}</Text>
                </View>
                <Ionicon name={'chevron-forward-outline'} size={25} color={colors.primary} />
            </View>
        </TouchableOpacity>
    )
};

export const styles = StyleSheet.create({
    itemSecction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
    },
    itemInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemNameText: {
        marginLeft: 10,
    },
});