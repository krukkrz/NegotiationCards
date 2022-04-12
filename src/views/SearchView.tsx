import {Layout} from "../components/Layout";
import {SearchBar} from "../components/SearchBar";
import {white} from "../constants/constants";
import {AppTitle} from "../components/AppTitle";
import React from "react";
import styled from "styled-components";
import {FlatList, ListRenderItemInfo, Text} from "react-native";
import {Game, games} from "../data/games";

const Item = styled(Text)`
    color: ${white};
    font-family: "FiraSans_700Bold";
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 30px;
`

const SearchView = () => {
    const renderItem = ({item: game}: ListRenderItemInfo<Game>) => <Item>{ game.title }</Item>
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