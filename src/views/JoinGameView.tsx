import {Layout} from "../components/Layout";
import {Text, View} from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";
import {useEffect, useState} from "react";
import styled from "styled-components/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App";
import {CloseButton} from "../components/Button";
import {Hint} from "../components/Texts";
import { Camera } from "expo-camera";

type Props = NativeStackScreenProps<RootStackParamList, 'PlayerB'>;


const Scanner = styled(Camera)`
  height: 80%;
  max-height: 400px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
`

const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 95%;
`

const JoinGameView = ({navigation, route}: Props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            // @ts-ignore
            setHasPermission(status === 'granted');
        })();
    }, []);

    // @ts-ignore
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        navigation.navigate('PlayerB', { id: data, aOrB: "B" })
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <Layout>
            <CloseButton navigation={navigation} route={route}/>
            <Wrapper>
                <Hint>Scan QR code from your oponent app</Hint>
                <Scanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    barCodeScannerSettings={{
                        barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
                    }}
                />
            </Wrapper>
        </Layout>
    )
}

export default JoinGameView