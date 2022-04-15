import {Layout} from "../components/Layout";
import React from "react";
import {AppTitle} from "../components/AppTitle";
import {Button} from "../components/Button";
import styled from "styled-components/native";
import {ScrollView, View} from "react-native";
import {white} from "../constants/constants";
import {SearchBar} from "../components/SearchBar";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App";

const Buttons = styled(View)`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-around;
`

type Props = NativeStackScreenProps<RootStackParamList, 'Search', 'Join'>;

const HomeView = ({ navigation }: Props) => {

    const handleAllGamesClick = () => {
        navigation.navigate('Search')
    }

    const handleJoinGameClick = () => {
        navigation.navigate('Join')
    };

    const handleFocus = () => navigation.navigate('Search')

    return (
        <Layout>
            <ScrollView>
                <AppTitle/>
                <SearchBar
                    placeholderTextColor={white}
                    placeholder="🔍   Search game by title"
                    onFocus={handleFocus}
                />
                <Buttons>
                    <Button text="New random game"/>
                    <Button text="Join game" onClick={handleJoinGameClick}/>
                    <Button text="All games" onClick={handleAllGamesClick}/>
                </Buttons>
            </ScrollView>
        </Layout>
    );
}

export default HomeView
