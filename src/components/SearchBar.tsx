import styled from "styled-components/native";
import {TextInput} from "react-native";
import {white} from "../constants/constants";

export const SearchBar = styled(TextInput)`
  height: 90px;
  color: ${white};
  border-bottom-color: ${white};
  border-bottom-width: 3px;
  margin: 50px 30px 80px;
  font-size: 20px;
  font-family: "FiraSans_400Regular";
`