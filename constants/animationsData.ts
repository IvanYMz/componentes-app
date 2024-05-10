import { useRef } from "react";
import useAnimation from "../hooks/useAnimation";
import { Animated } from "react-native";

export default function animationsData() {
    const { fadeIn, fadeOut, slideInTop, slideInBottom, rotate } = useAnimation();

    const fadeInAnimationValue = useRef(new Animated.Value(0)).current;
    const fadeOutAnimationValue = useRef(new Animated.Value(1)).current;
    const slideInTopAnimationValue = useRef(new Animated.Value(-20)).current;
    const slideInBottomAnimationValue = useRef(new Animated.Value(20)).current;
    const rotate90AnimationValue = useRef(new Animated.Value(0)).current;
    const rotate180AnimationValue = useRef(new Animated.Value(0)).current;
    const rotate360AnimationValue = useRef(new Animated.Value(0)).current;

    return {
        animations: [
            { name: 'fadeIn', ref: fadeInAnimationValue, properties: { opacityValue: fadeInAnimationValue }, function: fadeIn },
            { name: 'fadeOut', ref: fadeOutAnimationValue, properties: { opacityValue: fadeOutAnimationValue }, function: fadeOut },
            { name: 'slideInTop', ref: slideInTopAnimationValue, properties: { translateYValue: slideInTopAnimationValue }, function: slideInTop },
            { name: 'slideInTop', ref: slideInBottomAnimationValue, properties: { translateYValue: slideInBottomAnimationValue }, function: slideInBottom },
            { name: 'rotate90', ref: rotate90AnimationValue, properties: { rotateValue: rotate90AnimationValue, rotationDegrees: 90 }, function: rotate },
            { name: 'rotate180', ref: rotate180AnimationValue, properties: { rotateValue: rotate180AnimationValue, rotationDegrees: 180 }, function: rotate },
            { name: 'rotate360', ref: rotate360AnimationValue, properties: { rotateValue: rotate360AnimationValue, rotationDegrees: 360 }, function: rotate },
        ]
    };
};
