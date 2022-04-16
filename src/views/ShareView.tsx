import {Layout} from "../components/Layout";
import {CenteredHeadline, Hint} from "../components/Texts";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App";
// @ts-ignore
import styled from "styled-components/native";
import SvgQRCode from "react-native-qrcode-svg";
import {View} from "react-native";
import {black, white} from "../constants/constants";
import {CloseButton} from "../components/Button";

type Props = NativeStackScreenProps<RootStackParamList, 'Share', 'Home'>;

const QRWrapper = styled(View)`
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 300px;
  background-color: ${white};
  padding: 25px;
  border-radius: 20px;
`

const QRCode = styled(SvgQRCode)``

const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`

const ShareView = ({navigation, route}: Props) => {
    const title = route.params?.title;
    const gameId = route.params?.gameId;

    return (
        <Layout>
            <CloseButton navigation={navigation} route={route}/>
            <Wrapper>
                <CenteredHeadline>{title}</CenteredHeadline>
                <Hint>Show this QR code to your oponent</Hint>
                <QRWrapper>
                    <QRCode
                        value={`${gameId}`}
                        size={250}
                        color={black}
                        backgroundColor={white}
                    />
                </QRWrapper>
            </Wrapper>
        </Layout>
    )
}

export default ShareView