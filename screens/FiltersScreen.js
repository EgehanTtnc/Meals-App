import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { useDispatch } from 'react-redux';

import { Switch } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { setFilters } from '../store/actions/meals';

const FiltersScreen = props => {
    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian], dispatch);

    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <View style={styles.filterContainer}>
                <Text>Gluten-free</Text>
                <Switch
                    thumbColor={Colors.primaryColor}
                    trackColor={{ true: Colors.primaryColor }}
                    value={isGlutenFree}
                    onValueChange={newValue => setIsGlutenFree(newValue)}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text>Vegan</Text>
                <Switch
                    thumbColor={Colors.primaryColor}
                    trackColor={{ true: Colors.primaryColor }}
                    value={isVegan}
                    onValueChange={newValue => setIsVegan(newValue)}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text>Vegetarian</Text>
                <Switch
                    thumbColor={Colors.primaryColor}
                    trackColor={{ true: Colors.primaryColor }}
                    value={isVegetarian}
                    onValueChange={newValue => setIsVegetarian(newValue)}
                />
            </View >
            <View style={styles.filterContainer}>
                <Text>Lactose-free</Text>
                <Switch
                    thumbColor={Colors.primaryColor}
                    trackColor={{ true: Colors.primaryColor }}
                    value={isLactoseFree}
                    onValueChange={newValue => setIsLactoseFree(newValue)}
                />
            </View>
        </View>
    )
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filters',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
            <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title="Save"
                iconName="ios-save"
                onPress={navData.navigation.getParam('save')}
            />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center"
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        width: '80%',
        marginVertical: 5
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: "center"
    }

});

export default FiltersScreen;