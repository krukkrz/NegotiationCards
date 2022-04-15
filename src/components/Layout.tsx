import styled from "styled-components/native";
import { blue } from "../constants/constants"
import {SafeAreaView, View} from "react-native";

export const LayoutWrapper = styled(SafeAreaView)`
    padding-top: 40px;
    padding-right: 20px;
    padding-left: 20px;
    background-color: ${blue};
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  height: 100%;
`

const LimitWidth = styled(View)`
  max-width: 500px;
`

export const Layout = (props: { children: any; }) => (
    <LayoutWrapper>
        <LimitWidth>
            {props.children}
        </LimitWidth>
    </LayoutWrapper>
)