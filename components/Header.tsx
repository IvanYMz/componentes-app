import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, globalStyles } from '../config/theme/theme';
import { router } from 'expo-router';

interface HeaderProps {
    goBack?: boolean;
    safe?: boolean,
    white?: boolean,
    headerTitle: string;
};

export default function Header({ goBack, headerTitle, safe, white }: HeaderProps) {
    const { top }: { top: number } = useSafeAreaInsets();
    return (
        <View style={{
            ...styles.container,
            marginTop: safe ? top : 0,
        }}>
            {goBack && (
                <TouchableOpacity style={styles.backTouchable} onPress={() => { router.back(); }}>
                    <Ionicon name={'arrow-back-outline'} size={25} />
                </TouchableOpacity>
            )}
            <Text
                style={{
                    ...globalStyles.title,
                    color: white ? 'white' : colors.text
                }}
            >
                {headerTitle}
            </Text>
            <View></View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backTouchable: {
        padding: 4,
    },
});