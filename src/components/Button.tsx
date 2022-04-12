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

function largeButton(onClick: (() => void) | undefined, text: string) {
    return (
        <Wrapper>
            <Press onPress={onClick}>
                <ButtonText>{text}</ButtonText>
            </Press>
        </Wrapper>
    )
}

const SmPress = styled(Pressable)`
  color: ${black};
  border-radius: 8px;
  border: 3px ${black};
  background-color: ${yellow};
  height: 35px;
  width: 150px;
`

const SmButtonText = styled(Text)`
    margin: auto;
    font-family: "FiraSans_400Regular";
    font-size: 18px;
`

function smallButton(onClick: (() => void) | undefined, text: string) {
    return (
        <Wrapper>
            <SmPress onPress={onClick}>
                <SmButtonText>{text}</SmButtonText>
            </SmPress>
        </Wrapper>
    )
}

type Size = 'lg' | 'sm'

type Props = {
    text: string;
    onClick?: () => void;
    size?: Size;
}

export const Button = ({text, onClick, size = 'lg'}: Props) => {
    switch (size) {
        case 'sm': {
            return smallButton(onClick, text)
        }
        default: {
            return largeButton(onClick, text);
        }
    }
}
