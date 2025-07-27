import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import images from '../config/images';
import variables from '../config/variables';
import { defaultThemeType } from '../config/types';


SCLAlertHeader.defaultProps = {
    headerContainerStyles: {},
    headerInnerStyles: {},
    theme: defaultThemeType,
    headerIconComponent: null
}

function SCLAlertHeader(props) {
    return (
        <View style={[styles.container, styles.headerContainerStyles]}>
            <View
                style={[
                    styles.inner,
                    styles.headerInnerStyles,
                    { backgroundColor: variables[`${props.theme}Background`] }
                ]}
            >
                {!props.headerIconComponent && (
                    <Image
                        source={props.image ? props.image : { uri: images[props.theme] }}
                        style={props.image ? styles.customImage : styles.image}
                        resizeMode={'contain'}
                    />
                )}
                {props.headerIconComponent}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 150,
        top: 0,
        left: (variables.contentWidth / 2) - (variables.gutter / 2),
        borderRadius: variables.headerCircleSize,
        backgroundColor: variables.white,
        padding: 4
    },
    inner: {
        width: variables.headerCircleSize,
        height: variables.headerCircleSize,
        borderRadius: variables.headerCircleSize,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 32,
        width: 32
    },
    customImage: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFF'
    },
})

export default SCLAlertHeader
