import { StyleSheet } from "react-native";

export interface ThemeColors {
    primary: string;
    text: string;
    background: string;
    cardBackground: string;
    buttonTextColor: string;
}

export const colors: ThemeColors = {
    primary: "#5856D6",
    text: "black",
    background: "#F3F2F7",
    cardBackground: "white",
    buttonTextColor: "white",
};

export const globalStyles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: colors.text,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.text,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    globalMargin: {
        paddingHorizontal: 20,
        flex: 1,
    },
    btnPrimary: {
        padding: 8,
        borderRadius: 4,
        backgroundColor: colors.background,
    },
    btnPrimaryText: {
        color: colors.text,
        fontSize: 16,
    },
    itemsContainer: {
        backgroundColor: 'white',
        marginVertical: 15,
        padding: 10,
        borderRadius: 4,
    },
});