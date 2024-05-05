import { useRef } from "react";
import useAnimation from "./useAnimation";
import { Animated } from "react-native";

export default function animationsData() { // *** Agregar más animaciones ***
    const { fadeIn, fadeOut } = useAnimation();

    const fadeAnimationValue1 = useRef(new Animated.Value(0)).current;
    const fadeAnimationValue2 = useRef(new Animated.Value(1)).current;
    const fadeAnimationValue3 = useRef(new Animated.Value(0)).current;
    const fadeAnimationValue4 = useRef(new Animated.Value(1)).current;
    const fadeAnimationValue5 = useRef(new Animated.Value(0)).current;
    const fadeAnimationValue6 = useRef(new Animated.Value(1)).current;
    const fadeAnimationValue7 = useRef(new Animated.Value(0)).current;
    const fadeAnimationValue8 = useRef(new Animated.Value(1)).current;
    const fadeAnimationValue9 = useRef(new Animated.Value(0)).current;
    const fadeAnimationValue10 = useRef(new Animated.Value(1)).current;
    const fadeAnimationValue11 = useRef(new Animated.Value(0)).current;
    const fadeAnimationValue12 = useRef(new Animated.Value(0)).current;
    const fadeAnimationValue13 = useRef(new Animated.Value(1)).current;
    const fadeAnimationValue14 = useRef(new Animated.Value(0)).current;
    const fadeAnimationValue15 = useRef(new Animated.Value(1)).current;
    const fadeAnimationValue16 = useRef(new Animated.Value(0)).current;
    const fadeAnimationValue17 = useRef(new Animated.Value(1)).current;
    const fadeAnimationValue18 = useRef(new Animated.Value(0)).current;
    const fadeAnimationValue19 = useRef(new Animated.Value(1)).current;
    const fadeAnimationValue20 = useRef(new Animated.Value(0)).current;
    const fadeAnimationValue21 = useRef(new Animated.Value(1)).current;

    return {
        animations: [
            { name: 'fadeIn', ref: fadeAnimationValue1, function: fadeIn },
            { name: 'fadeOut', ref: fadeAnimationValue2, function: fadeOut },
            { name: 'fadeIn', ref: fadeAnimationValue3, function: fadeIn },
            { name: 'fadeOut', ref: fadeAnimationValue4, function: fadeOut },
            { name: 'fadeIn', ref: fadeAnimationValue5, function: fadeIn },
            { name: 'fadeOut', ref: fadeAnimationValue6, function: fadeOut },
            { name: 'fadeIn', ref: fadeAnimationValue7, function: fadeIn },
            { name: 'fadeOut', ref: fadeAnimationValue8, function: fadeOut },
            { name: 'fadeIn', ref: fadeAnimationValue9, function: fadeIn },
            { name: 'fadeOut', ref: fadeAnimationValue10, function: fadeOut },
            { name: 'fadeIn', ref: fadeAnimationValue11, function: fadeIn },
            { name: 'fadeIn', ref: fadeAnimationValue12, function: fadeIn },
            { name: 'fadeOut', ref: fadeAnimationValue13, function: fadeOut },
            { name: 'fadeIn', ref: fadeAnimationValue14, function: fadeIn },
            { name: 'fadeOut', ref: fadeAnimationValue15, function: fadeOut },
            { name: 'fadeIn', ref: fadeAnimationValue16, function: fadeIn },
            { name: 'fadeOut', ref: fadeAnimationValue17, function: fadeOut },
            { name: 'fadeIn', ref: fadeAnimationValue18, function: fadeIn },
            { name: 'fadeOut', ref: fadeAnimationValue19, function: fadeOut },
            { name: 'fadeIn', ref: fadeAnimationValue20, function: fadeIn },
            { name: 'fadeOut', ref: fadeAnimationValue21, function: fadeOut },
        ]
    };
};