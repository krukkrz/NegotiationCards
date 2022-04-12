import HomeView from "./src/views/HomeView";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {FiraSans_400Regular, FiraSans_700Bold} from "@expo-google-fonts/fira-sans";
import {useFonts} from "expo-font";
import {Lora_400Regular} from "@expo-google-fonts/lora";
import AppLoading from "expo-app-loading";
import React from "react";
import SearchView from "./src/views/SearchView";

const Stack = createNativeStackNavigator()

export type RootStackParamList = {
    Home: undefined;
    Search: undefined;
};

const App = () => {
    let [fontsLoaded] = useFonts({
        FiraSans_400Regular,
        FiraSans_700Bold,
        Lora_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    // @ts-ignore
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeView} options={{ headerShown: false }}/>
            <Stack.Screen name='Search' component={SearchView} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App