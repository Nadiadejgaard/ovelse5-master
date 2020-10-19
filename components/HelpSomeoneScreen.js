import React,{Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class HelpSomeoneScreen extends Component {
    static navigationOptions= {
        title:'HelpSomeone'
    }

    GoToHelpSomeone2 = (route) => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn
        // "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('HelpSomeone2');
    };

    render() {
       return(
           <View style={styles.container}>
               <TouchableOpacity onPress={this.GoToHelpSomeone2}>
                   <Image style={styles.logo} source={require("../assets/billede1.png")}/>
               </TouchableOpacity>
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
    logo: {
        width:420,
        height:770
    }
});