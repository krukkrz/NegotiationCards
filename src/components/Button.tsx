import styled from "styled-components";
import {Pressable, Text, View} from "react-native";
import {black, yellow} from "../constants/constants";
import React from "react";

const Wrapper = styled(View)`
    margin-left: auto;
    margin-right: auto;
`

const Press = styled(Pressable)`
  color: ${black};
  border-radius: 8px;
  border: 3px ${black};
  background-color: ${yellow};
  height: 70px;
  width: 250px;
`

const ButtonText = styled(Text)`
    margin: auto;
    font-family: "FiraSans_400Regular";
    font-size: 20px;
`
type Props = {
    text: string;
    onClick?: () => void;
}

export const Button = ({text, onClick}: Props) => (
    <Wrapper>
        <Press onPress={onClick}>
            <ButtonText>{text}</ButtonText>
        </Press>
    </Wrapper>
)