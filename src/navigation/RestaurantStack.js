import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen";
import { AddRestaurantScreen } from "../screens/Restaurants/AddRestaurantScreen";
import { screen } from "../utils/screensName";
const stack = createNativeStackNavigator();

export function RestaurantStack () {
    return (
        <stack.Navigator>
            <stack.Screen 
            name={screen.restaurant.restaurants} 
            component={RestaurantsScreen}
            options={{ title: "Restaurants"}}
            />
            <stack.Screen 
            name={screen.restaurant.addRestaurant} 
            component={AddRestaurantScreen}
            options={{ title: "New Restaurant"}}
            />
        </stack.Navigator>
    )
}