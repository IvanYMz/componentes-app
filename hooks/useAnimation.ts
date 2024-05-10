// useAnimation.js
import { Animated } from "react-native";

interface animatedProps {
    toValue?: Animated.Value;
    duration?: number;
    delay?: number;
    animationValue: Animated.Value;
};

export default function useAnimation() {
    function fadeIn({ toValue, duration = 1000, delay = 0, animationValue }: animatedProps) {
        Animated.timing(animationValue, {
            toValue: toValue ? toValue : 1,
            duration: duration,
            delay: delay,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(() => {
                animationValue.setValue(0);
            }, 500);
        });
    };

    function fadeOut({ toValue, duration = 1000, delay = 0, animationValue }: animatedProps) {
        Animated.timing(animationValue, {
            toValue: toValue ? toValue : 0,
            duration: duration,
            delay: delay,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(() => {
                animationValue.setValue(1);
            }, 500);
        });
    };

    function slideInTop({ toValue, duration = 1000, delay = 0, animationValue }: animatedProps) {
        Animated.timing(animationValue, {
            toValue: toValue ? toValue : 0,
            duration: duration,
            delay: delay,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(() => {
                animationValue.setValue(-20);
            }, 500);
        });
    };

    function slideInBottom({ toValue, duration = 1000, delay = 0, animationValue }: animatedProps) {
        Animated.timing(animationValue, {
            toValue: toValue ? toValue : 0,
            duration: duration,
            delay: delay,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(() => {
                animationValue.setValue(20);
            }, 500);
        })
    };

    function rotate({ toValue, duration = 1000, delay = 0, animationValue }: animatedProps) {
        Animated.timing(animationValue, {
            toValue: toValue ? toValue : 1,
            duration: duration,
            delay: delay,
            useNativeDriver: true,
        }).start(() => { animationValue.setValue(0); });
    };

    return {
        fadeIn,
        fadeOut,
        slideInTop,
        slideInBottom,
        rotate,
    }
};
