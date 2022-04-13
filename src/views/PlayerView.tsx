import {Layout} from "../components/Layout";
import {ScrollView, Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App";
import React, {useState} from "react";
import styled from "styled-components";
import {CenteredHeadline, Headline, Title} from "../components/Texts";
import {Button} from "../components/Button";
import {white} from "../constants/constants";
import {Game, games} from "../data/games";

type Props = NativeStackScreenProps<RootStackParamList, 'PlayerA', 'PlayerB', 'Home'>;

const Buttons = styled(View)`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
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
    let aOrB = route.params?.aOrB;

    let role: string
    let goals: string
    let game: Game | undefined

    if (aOrB === 'A') {
        game =  route.params?.game;
    } else {
        gameId = parseInt(route.params?.id);
        game = games.find( g => g.id === gameId);
    }

    role = game?.playerB.role;
    goals = game?.playerB.goals;
    let gameId = game?.id;
    let situation = game?.situation;
    let title = game?.title;

    return (
        <Layout>
            <ScrollView>
                <CenteredHeadline>Player {aOrB}</CenteredHeadline>
                <Buttons>
                    <Button text='Home' size='sm' onClick={() => navigation.navigate('Home')} />
                    <Button text='Share game' size='sm' onClick={() => navigation.navigate('Share', {title, gameId})}/>
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
            </ScrollView>
        </Layout>
    )
}
export default PlayerView