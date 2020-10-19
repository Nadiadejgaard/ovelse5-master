import React,{Component} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import ihelper from "../assets/Ihepler.png";

export default class SeekHelpScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Denne side er jeg ikke gået videre med i denne omgang
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
        padding: 0,
    },
    paragraph: {
        margin: 24,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#00366d',
    },
    logo: {
        width:'100%',
        height: '100%',
    }
});
