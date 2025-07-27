import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { ThemeType } from "../config/types";

export declare function SCLAlertButton(props: SCLAlertButtonProps): React.JSX.Element;

export declare type SCLAlertButtonProps = {
    children: ReactNode,
    containerStyle?: ViewStyle,
    textStyle?: ViewStyle | TextStyle,
    theme?: ThemeType,
    onPress: () => void
};

export default SCLAlertButton;