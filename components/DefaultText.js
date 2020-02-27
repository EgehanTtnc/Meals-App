import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';

const DefaultText = props => {
    return (
        <Text style={styles.text}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans'
    }
});

export default DefaultText;