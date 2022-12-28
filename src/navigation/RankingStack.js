import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RankingScreen } from "../screens/RankingScreen";
import { screen } from "../utils/screensName";

const stack = createNativeStackNavigator();


export function RankingStack() {
    return (
        <stack.Navigator>
            <stack.Screen 
            name={screen.ranking.ranking} 
            component={RankingScreen}
            options={{ title: "Ranking" }}
            />
        </stack.Navigator>
    )
}