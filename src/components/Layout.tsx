import styled from "styled-components/native";
import { blue } from "../constants/constants"
import {SafeAreaView, View} from "react-native";

export const LayoutWrapper = styled(SafeAreaView)`
    flex: 1;
`

const LimitWidth = styled(View)`
  padding-top: 40px;
  padding-right: 20px;
  padding-left: 20px;
  background-color: ${blue};
  max-width: 500px;
  height: 100%;
`

export const Layout = (props: { children: any; }) => (
    <LayoutWrapper>
        <LimitWidth>
            {props.children}
        </LimitWidth>
    </LayoutWrapper>
)