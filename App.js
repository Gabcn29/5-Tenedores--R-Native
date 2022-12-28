import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navigation/AppNavigation"
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { initFirebase } from "./src/utils/firebase";


LogBox.ignoreAllLogs();

export default function App() {
  return (    
     <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
     </>   
  );
}

