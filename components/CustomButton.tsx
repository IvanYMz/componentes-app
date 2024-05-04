import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../config/theme/theme';

interface CustomButtonProps {
    buttonText: string;
    onPressFunction: () => void;
};

export default function CustomButton({buttonText, onPressFunction}:CustomButtonProps) {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onPressFunction}>
            <Text style={styles.textStyle}>{buttonText}</Text>
        </TouchableOpacity>
    )
};

export const styles = StyleSheet.create({
    buttonStyle: {
        padding: 10,
        borderRadius: 4,
        backgroundColor: colors.primary,
    },
    textStyle: {
        textAlign: 'center',
        color: colors.buttonTextColor,
    },
});