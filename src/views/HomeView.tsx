import {Layout} from "../components/Layout";
import React from "react";
import {AppTitle} from "../components/AppTitle";
import styled from "styled-components";
import { Button } from "react-native";
import {yellow} from "../constants/constants";

const MButton = styled.Button`
  background-color: ${yellow};
  color: red;
`

const HomeView = () => {
    return (
        <Layout>
            <AppTitle/>
            <MButton
                title="New game"
                onPress={() => {}}
            />
        </Layout>
    );
}

export default HomeView
