import {Layout} from "../components/Layout";
import {SearchBar} from "../components/SearchBar";
import {white} from "../constants/constants";
import {AppTitle} from "../components/AppTitle";
import React from "react";
import styled from "styled-components";
import {FlatList, ListRenderItemInfo, Pressable, Text} from "react-native";
import {Game, games} from "../data/games";
import {RootStackParamList} from "../../App";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

const ItemText = styled(Text)`
  color: ${white};
  font-family: "FiraSans_700Bold";
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 30px;
`

type Props = NativeStackScreenProps<RootStackParamList, 'PlayerA'>;

const SearchView = ({ navigation }: Props) => {
    const renderItem = ({item: game}: ListRenderItemInfo<Game>) => (
        <Pressable onPress={() => navigation.navigate('PlayerA', {game})}>
            <ItemText>{ game.title }</ItemText>
        </Pressable>
    )

    return (
        <Layout>
            <AppTitle/>
            <SearchBar
                placeholderTextColor={white}
                placeholder="🔍   Search game by title"
            />
            <FlatList
                data={games}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </Layout>
    )
}

export default SearchView