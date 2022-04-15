import styled from "styled-components/native";
import { blue } from "../constants/constants"
import {SafeAreaView} from "react-native";

export const Layout = styled(SafeAreaView)`
    padding-top: 40px;
    padding-right: 20px;
    padding-left: 20px;
    background-color: ${blue};
    flex: 1;
`