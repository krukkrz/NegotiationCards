import HomeView from "./src/views/HomeView";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {FiraSans_400Regular, FiraSans_600SemiBold, FiraSans_700Bold} from "@expo-google-fonts/fira-sans";
import {useFonts} from "expo-font";
import {Lora_400Regular} from "@expo-google-fonts/lora";
import AppLoading from "expo-app-loading";
import React from "react";

const Stack = createNativeStackNavigator()

const App = () => {
    let [fontsLoaded] = useFonts({
        FiraSans_400Regular,
        FiraSans_700Bold,
        Lora_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeView}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App