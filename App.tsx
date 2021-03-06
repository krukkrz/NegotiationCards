import HomeView from "./src/views/HomeView";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {FiraSans_400Regular, FiraSans_700Bold} from "@expo-google-fonts/fira-sans";
import {useFonts} from "expo-font";
import {Lora_400Regular} from "@expo-google-fonts/lora";
import AppLoading from "expo-app-loading";
import React from "react";
import SearchView from "./src/views/SearchView";
import {Game} from "./src/data/games";
import ShareView from "./src/views/ShareView";
import JoinGameView from "./src/views/JoinGameView";
import PlayerBView from "./src/views/PlayerBView";
import PlayerAView from "./src/views/PlayerAView";

const Stack = createNativeStackNavigator()

export type RootStackParamList = {
    Home: undefined;
    Search: undefined;
    PlayerA: {
        game: Game;
        aOrB: AB;
    };
    PlayerB: {
        id: any;
        aOrB: AB;
    };
    Share: {
        title: string;
        gameId: number;
    };
    Join: undefined;
};

export type AB = 'A' | 'B'

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
            <Stack.Screen name='PlayerA' component={PlayerAView} options={{ headerShown: false }}/>
            <Stack.Screen name='PlayerB' component={PlayerBView} options={{ headerShown: false }}/>
            <Stack.Screen name='Share' component={ShareView} options={{ headerShown: false }}/>
            <Stack.Screen name='Join' component={JoinGameView} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App