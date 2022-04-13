import styled from "styled-components";
import {Text} from "react-native";
import {white} from "../constants/constants";

export const Headline = styled(Text)`
  color: ${white};
  font-size: 32px;
  font-family: "FiraSans_700Bold";
`
export const Title = styled(Text)`
  color: ${white};
  font-size: 20px;
  font-family: "FiraSans_700Bold";
`

export const CenteredHeadline = styled(Headline)`
  text-align: center;
`

export const Hint = styled(Title)`
  text-align: center;
`