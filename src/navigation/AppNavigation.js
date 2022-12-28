import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { RestaurantStack } from "./RestaurantStack";
import { FavoritesStack } from "./FavoriteStack";
import { RankingStack } from "./RankingStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";

import { screen } from "../utils/screensName";





const Tab = createBottomTabNavigator();



export function AppNavigation () {
    return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarActiveInColor: "#00a680",
            tabBarInActiveInColor: "#646464",
            tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
            headerShown: false
        })}>
            
            <Tab.Screen name={screen.restaurant.tab} component={RestaurantStack} options={{ title: "Restaurants"}} />
            <Tab.Screen name={screen.search.tab} component={SearchStack} options={{ title: "Search"}} />
            <Tab.Screen name={screen.favorites.tab} component={FavoritesStack} options={{ title: "Favorites"}} />
            <Tab.Screen name={screen.ranking.tab} component={RankingStack} options={{ title: "Ranking"}} />
            <Tab.Screen name={screen.account.tab} component={AccountStack} options={{ title: "Account"}} />
        </Tab.Navigator>     
    )
}

function screenOptions(route, color, size) {
    let iconName;

    if (route.name === screen.restaurant.tab) {
        iconName = "restaurant"
    }
    if (route.name === screen.favorites.tab ) {
        iconName = "favorite"
    }
    if (route.name === screen.ranking.tab) {
        iconName = "star-rate"
    }
    if (route.name === screen.search.tab) {
        iconName = "search"
    }
    if (route.name === screen.account.tab) {
        iconName = "account-circle"
    }

    return (
        <Icon type="material" name={iconName} color={color} size={size} />
    )
}