import React,{Component} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default class HelpSomeoneScreen2 extends Component {
    static navigationOptions= {
        title:'HelpSomeone2'
    }

    render() {
        return(
            <View style={styles.container}>
                    <Image style={styles.logo} source={require("../assets/billede2.png")}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#B8E7FB',
        padding: 0,
    },
    logo: {
        width:425,
        height:750,
        marginBottom: 150
    }
});
