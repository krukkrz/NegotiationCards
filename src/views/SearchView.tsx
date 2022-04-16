import {Layout} from "../components/Layout";
import {SearchBar} from "../components/SearchBar";
import {white} from "../constants/constants";
import {AppTitle} from "../components/AppTitle";
import React, {useState} from "react";
// @ts-ignore
import styled from "styled-components/native";
import {FlatList, ListRenderItemInfo, Pressable, Text} from "react-native";
import {Game, games} from "../data/games";
import {RootStackParamList} from "../../App";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {CloseButton} from "../components/Button";

const ItemText = styled(Text)`
  color: ${white};
  font-family: "FiraSans_700Bold";
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 30px;
`

type Props = NativeStackScreenProps<RootStackParamList, 'PlayerA'>;

const SearchView = ({ navigation, route }: Props) => {
    const [searchText, setSearchText] = useState("")

    const renderItem = ({item: game}: ListRenderItemInfo<Game>) => (
        <Pressable onPress={() => navigation.navigate('PlayerA', {game, aOrB:'A'})}>
            <ItemText>{ game.title }</ItemText>
        </Pressable>
    )

    const handleTyping = (text: string) => {
        setSearchText(text)
    }

    const filteredData = searchText
        ? games.filter(x =>
            x.title.toLowerCase().includes(searchText.toLowerCase())
        )
        : games;

    return (
        <Layout>
            <CloseButton navigation={navigation} route={route}/>
            <SearchBar
                placeholderTextColor={white}
                placeholder="🔍   Search game by title"
                onChangeText={handleTyping}
            />
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </Layout>
    )
}

export default SearchView