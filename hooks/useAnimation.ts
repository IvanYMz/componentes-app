// useAnimation.js
import { Animated } from "react-native";

interface fadeProps {
    toValue?: Animated.Value;
    duration?: number;
    delay?: number;
    fadeAnimationValue: Animated.Value;
};

export default function useAnimation() {
    function fadeIn({ toValue, duration = 1000, delay = 0, fadeAnimationValue }: fadeProps) {
        Animated.timing(fadeAnimationValue, {
            toValue: toValue ? toValue : 1,
            duration: duration,
            delay: delay,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(() => {
                fadeAnimationValue.setValue(0);
            }, 500);
        });
    };

    function fadeOut({ toValue, duration = 1000, delay = 0, fadeAnimationValue }: fadeProps) {
        Animated.timing(fadeAnimationValue, {
            toValue: toValue ? toValue : 0,
            duration: duration,
            delay: delay,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(() => {
                fadeAnimationValue.setValue(1);
            }, 500);
        });
    };

    return {
        fadeIn,
        fadeOut,
    }
};
