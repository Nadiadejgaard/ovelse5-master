import {createStackNavigator} from "react-navigation-stack";
import HelpSomeoneScreen from './HelpSomeoneScreen';
import HelpSomeoneScreen2 from "./HelpSomeoneScreen2";

//Dette er stack navigationen for HelpSomeone
const SettingStack = createStackNavigator({
        //Fra venstre er det side navnet og screen er vores View / component
        HelpSomeone: { screen: HelpSomeoneScreen },
        HelpSomeone2: { screen: HelpSomeoneScreen2 }
        },

    {
        //Start View og titel
        initialRouteName:'HelpSomeone',
        navigationOptions:{
            title:'Main'
        }
    }
);

//Skyd det afsted så App.js kan bruge componenet
export default SettingStack



