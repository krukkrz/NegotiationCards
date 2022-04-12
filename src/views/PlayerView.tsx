import {Layout} from "../components/Layout";
import {Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App";
import React, {useState} from "react";
import styled from "styled-components";
import {Headline} from "../components/Texts";
import {Button} from "../components/Button";
import {white} from "../constants/constants";

type Props = NativeStackScreenProps<RootStackParamList, 'PlayerA', 'Home'>;

const PlayerTitle = styled(Headline)`
  text-align: center;
`

const Buttons = styled(View)`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
`

const Title = styled(Text)`
  color: ${white};
  font-size: 20px;
  font-family: "FiraSans_700Bold";
`

const Section = styled(View)`
  margin-top: 10px;
  margin-bottom: 10px;
`

const Paragraph = styled(Text)`
  color: ${white};
  font-size: 15px;
  font-family: "Lora_400Regular";
`

const Goals = styled(View)`
  display: flex;
  flex-direction: row;
`

const PlayerView = ({navigation, route}: Props) => {
    const [isShown, setIsShown] = useState(false)
    let title = route.params?.game?.title;
    let situation = route.params?.game?.situation;
    let role = route.params?.game?.playerA.role;
    let goals = route.params?.game?.playerA.goals;

    return (
        <Layout>
            <PlayerTitle>Player A</PlayerTitle>
            <Buttons>
                <Button text='Home' size='sm' onClick={() => navigation.navigate('Home')} />
                <Button text='Share game' size='sm'/>
            </Buttons>
            <Headline>{title}</Headline>
            <Section>
                <Title>Situation:</Title>
                <Paragraph>{situation}</Paragraph>
            </Section>
            <Section>
                <Title>Your role:</Title>
                <Paragraph>{role}</Paragraph>
            </Section>
            <Section>
                <Goals>
                    <Title>Your goals:</Title>
                    <Button
                        text={isShown?<Text>Hide</Text>:<Text>Reveal</Text>}
                        size='sm'
                        onClick={() => setIsShown(!isShown)}
                    />
                </Goals>
                { isShown? (<Paragraph>{goals}</Paragraph>) : <></> }
            </Section>
        </Layout>
    )
}
export default PlayerView