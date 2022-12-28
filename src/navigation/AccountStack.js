import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../screens/Account/AccountScreen"; 
import { screen } from "../utils/screensName";
import { LoginScreen } from "../screens/Account/LoginScreen/LoginScreen";
import { RegisterScreen } from "../screens/Account/RegisterScreen/RegisterScreen";

const stack = createNativeStackNavigator();


export function AccountStack() {
    return (
        <stack.Navigator>
            <stack.Screen 
            name={screen.account.account} 
            component={AccountScreen}
            options={{ title: "Account" }}
            />
            <stack.Screen 
            name={screen.account.login} 
            component={LoginScreen}
            options={{ title: "Login" }}
            />
            <stack.Screen 
            name={screen.account.register} 
            component={RegisterScreen}
            options={{ title: "Register" }}
            />
        </stack.Navigator>
    )
}