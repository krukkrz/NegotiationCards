import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import {games} from "../data/games";
import PlayerView from "./PlayerView";

type Props = NativeStackScreenProps<RootStackParamList, 'PlayerB'>;

const PlayerBView = ({navigation, route}: Props) => {
    const gameId = parseInt(route.params?.id) || 0;
    const game = games.find( g => g.id === gameId);
    return <PlayerView aOrB={route.params.aOrB} game={game} navigation={navigation}/>
}
export default PlayerBView