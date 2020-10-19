import React,{Component} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import SignUpForm from './components/SignUpForm';
import firebase from 'firebase';
import ProfilScreen from "./components/ProfilScreen";
import LoginForm from "./components/LoginForm";

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends Component {
    state = {user:null}

    componentDidMount(){
        // fireBaseConfig sat op med min firebase
        const fireBaseConfig ={
            apiKey: "AIzaSyApnl011Bi7_QqPFd9zOmufLBAZB83-7cw",
            authDomain: "fir-project-715ac.firebaseapp.com",
            databaseURL: "https://fir-project-715ac.firebaseio.com",
            projectId: "fir-project-715ac",
            storageBucket: "fir-project-715ac.appspot.com",
            messagingSenderId: "635469147570",
            appId: "1:635469147570:web:591b4a54d35b24c80fc8ab",
            measurementId: "G-GGPZQG0HK3"
        }
        // Nedenstående statement sikrer at Init firebase kun sker en gang
        if (!firebase.apps.length) {
            firebase.initializeApp(fireBaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
                this.setState({ user });
            });
    }
    render() {
        const {user} = this.state

        // Hvis user ikke er logget ind viser den startsiden med login og sign up ellers går man til profilscreen
        if(!user){
            return (
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('./assets/Ihepler.png')} />
                    <Card>
                        <LoginForm />
                    </Card>
                    <Card>
                        <SignUpForm/>
                    </Card>
                </View>
            )
        } else {
            return (
                <ProfilScreen/>
            )
        }
    }
}
// styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 8,
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
        height: 300,
    }
});
