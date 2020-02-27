import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryGridTile = props => {
    return (
        <TouchableOpacity
            style={styles.gridItem}
            onPress={props.onSelect}
        >
            <View style={{...styles.container,...{backgroundColor: props.color}}}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 10,
        elevation: 30,
        padding: 15,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: "right"
    }
});

export default CategoryGridTile;