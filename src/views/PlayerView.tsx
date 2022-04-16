import {AB} from "../../App";
import {Game} from "../data/games";
import React, {useState} from "react";
import {Layout} from "../components/Layout";
import {ScrollView, Text, View} from "react-native";
import {CenteredHeadline, Headline, Title} from "../components/Texts";
import {Button} from "../components/Button";
import {white} from "../constants/constants";
// @ts-ignore
import styled from "styled-components/native";


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

type PlayerProps = {
    aOrB: AB;
    game?: Game
    navigation: any
}

const PlayerView = ({aOrB, game, navigation}: PlayerProps) => {
    const [isShown, setIsShown] = useState(false)
    const title = game?.title;
    const gameId = game?.id;
    let role: string;
    let goals: string;

    if (aOrB === 'A') {
        role = game?.playerA.role || '';
        goals = game?.playerA.goals || '';
    } else {
        role = game?.playerB.role || '';
        goals = game?.playerB.goals || '';
    }
    return (
        <Layout>
            <ScrollView>
                <CenteredHeadline>Player {aOrB}</CenteredHeadline>
                <Buttons>
                    <Button text='Home' size='sm' onClick={() => navigation.navigate('Home')} />
                    <Button text='Share game' size='sm' onClick={() => navigation.navigate('Share', { title, gameId})}/>
                </Buttons>
                <Headline>{title}</Headline>
                <Section>
                    <Title>Situation:</Title>
                    <Paragraph>{game?.situation}</Paragraph>
                </Section>
                <Section>
                    <Title>Your role:</Title>
                    <Paragraph>{role}</Paragraph>
                </Section>
                <Section>
                    <Goals>
                        <Title>Your goals:</Title>
                        <Button
                            text={isShown?'Hide':'Reveal'}
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