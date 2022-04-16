// @ts-ignore
import styled from "styled-components/native";
import { blue } from "../constants/constants"
import {SafeAreaView, View} from "react-native";

export const LayoutWrapper = styled(SafeAreaView)`
    padding-top: 40px;
    padding-right: 20px;
    padding-left: 20px;
    background-color: ${blue};
    min-height: 100%;
    display: flex;
    align-items: center;
`

const LimitWidth = styled(View)`
  width: 100%;
  max-width: 500px;
  min-height: 90%;
`

export const Layout = (props: { children: any; }) => (
    <LayoutWrapper>
        <LimitWidth>
            {props.children}
        </LimitWidth>
    </LayoutWrapper>
)