import {Layout} from "../components/Layout";
import { white } from "../constants/constants";
import styled from "styled-components";
import {Text} from "react-native";
import React from "react";

const Header = styled(Text)`
  color: ${white};
  font-size: 32px;
  font-family: "FiraSans_700Bold";
`

const HomeView = () => {
    return (
        <Layout>
            <Header>Home</Header>
        </Layout>
    );
}

export default HomeView
