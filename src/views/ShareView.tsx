import {Layout} from "../components/Layout";
import {CenteredHeadline, Hint, Title} from "../components/Texts";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App";
import styled from "styled-components";
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

const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`

const ShareView = ({navigation, route}: Props) => {
    const title = route.params?.title;

    return (
        <Layout>
            <CloseButton navigation={navigation} route={route}/>
            <Wrapper>
                <CenteredHeadline>{title}</CenteredHeadline>
                <Hint>Show this QR code to your oponent</Hint>
                <QRWrapper>
                    <SvgQRCode
                        value="http://example.com"
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