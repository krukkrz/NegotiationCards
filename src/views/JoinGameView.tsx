import {Layout} from "../components/Layout";
import {Text, View} from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App";
import {CloseButton} from "../components/Button";
import {Hint} from "../components/Texts";

type Props = NativeStackScreenProps<RootStackParamList, 'Share', 'Home'>;


const Scanner = styled(BarCodeScanner)`
  height: 80%;
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
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
                />
            </Wrapper>
        </Layout>
    )
}

export default JoinGameView