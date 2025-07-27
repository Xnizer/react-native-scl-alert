import { ReactNode } from "react"
import { ViewStyle, TextStyle } from "react-native"
import { ThemeType } from "../config/types";

export declare class SCLAlert extends React.Component<SCLAlertProps, {}> {

};

export declare type SCLAlertProps = {
    children: ReactNode,
    show?: boolean,
    cancellable?: boolean,
    onRequestClose: () => void,
    slideAnimationDuration?: number,
    overlayStyle?: ViewStyle,

    title: string,
    titleContainerStyle?: ViewStyle,
    titleStyle?: ViewStyle | TextStyle,

    subtitle: string,
    subtitleContainerStyle?: ViewStyle,
    subtitleStyle?: ViewStyle | TextStyle,

    theme?: ThemeType,
    headerContainerStyles?: ViewStyle,
    headerInnerStyles?: ViewStyle,
    headerIconComponent?: ReactNode,
};

export default SCLAlert;