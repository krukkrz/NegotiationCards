import {Layout} from "../components/Layout";
import {ScrollView, Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {AB, RootStackParamList} from "../../App";
import React, {useState} from "react";
// @ts-ignore
import styled from "styled-components/native";
import {CenteredHeadline, Headline, Title} from "../components/Texts";
import {Button} from "../components/Button";
import {white} from "../constants/constants";
import {Game, games} from "../data/games";
import PlayerView from "./PlayerView";

type Props = NativeStackScreenProps<RootStackParamList, 'PlayerA'>;

const PlayerAView = ({navigation, route}: Props) => {
    return <PlayerView aOrB={route.params.aOrB} game={route.params.game} navigation={navigation}/>
}
export default PlayerAView
