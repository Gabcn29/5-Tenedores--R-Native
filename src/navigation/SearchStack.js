import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "../screens/SearchScreen";
import { screen } from "../utils/screensName";

const stack = createNativeStackNavigator();


export function SearchStack() {
    return (
        <stack.Navigator>
            <stack.Screen 
            name={screen.search.search} 
            component={SearchScreen}
            options={{ title: "Search" }}
            />
        </stack.Navigator>
    )
}