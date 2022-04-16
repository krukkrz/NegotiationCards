// @ts-ignore
import styled from "styled-components/native";
import {Image, Pressable, Text, View} from "react-native";
import {black, yellow} from "../constants/constants";
import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App";

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

const CloseImage = styled(Image)`
  width: 50px;
  height: 50px;
  margin-left: auto;
`
type PropsCloseButton = NativeStackScreenProps<RootStackParamList>;
export const CloseButton = ({ navigation }: PropsCloseButton) => {
    const handleNavigation = () => navigation.goBack()
    return (
        <Pressable onPress={handleNavigation}>
            <CloseImage source={require('../../assets/Button.png')}/>
        </Pressable>
    )
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
