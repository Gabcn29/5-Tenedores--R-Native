import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { screen } from "../utils/screensName";

const stack = createNativeStackNavigator();


export function FavoritesStack() {
    return (
        <stack.Navigator>
            <stack.Screen 
            name={screen.favorites.favorites} 
            component={FavoritesScreen}
            options={{ title: "Favorites" }}
            />
        </stack.Navigator>
    )
}