import {Layout} from "../components/Layout";
import React from "react";
import {AppTitle} from "../components/AppTitle";
import {Button} from "../components/Button";
import styled from "styled-components";
import {View} from "react-native";
import {white} from "../constants/constants";
import {SearchBar} from "../components/SearchBar";

const Buttons = styled(View)`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-around;
`

const HomeView = () => {
    return (
        <Layout>
            <AppTitle/>
            <SearchBar
                placeholderTextColor={white}
                placeholder="🔍   Search game by title"
            />
            <Buttons>
                <Button text="New random game"/>
                <Button text="Join game"/>
                <Button text="All games"/>
            </Buttons>
        </Layout>
    );
}

export default HomeView
