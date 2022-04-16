// @ts-ignore
import styled from "styled-components/native";
import {Text, View} from "react-native";
import {turquoise, white} from "../constants/constants";
import React from "react";

const Header = styled(Text)`
  color: ${white};
  font-size: 32px;
  font-family: "FiraSans_700Bold";
  text-align: center;
`

const TitleBackground = styled(View)`
  background-color: ${turquoise};
  margin: 15px;
  padding: 5px;
  border-radius: 11px;
`

export const AppTitle = () => (
    <TitleBackground>
        <Header>Negotiation Cards</Header>
    </TitleBackground>
)
