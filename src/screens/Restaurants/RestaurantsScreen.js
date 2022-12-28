import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { screen } from "../../utils/screensName";

export function RestaurantsScreen (props){
    const { navigation } = props;

    const goToAddRestaurant = () => {
        navigation.navigate(screen.account.tab, { screen: screen.account.account })
    }

    return (
        <View>
            <Text>Estamos en la Screen Restaurants</Text>
            <Button title="Add Restaurant" onPress={goToAddRestaurant} />
        </View>
    );
}  