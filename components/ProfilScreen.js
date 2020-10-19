import * as React from 'react';
import SeekHelpScreen from "./SeekHelpScreen";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from "react-navigation";
import StackNavigator from './StackNavigator';

// Denne TabNavigator holder styr på det yderste niveau af navigation når man er kommet ind på appen
   const TabNavigator = createBottomTabNavigator({

           //Navn på Route
           HelpSomeone: {
               //Hvilket view skal loades, i dette tilfælde min stacknavigator
               screen: StackNavigator,
               //Instillinger til navigation
               navigationOptions: {
                   // Navnet på tab bar label
                   tabBarLabel:"Help Someone",
               },
           },

           //Navn på Route
            SeekHelp: {
                //Hvilket view skal loades
                screen: SeekHelpScreen,
                //Instillinger til navigation
                navigationOptions: {
                    // Navnet på tab bar label
                    tabBarLabel:"Seek Help",
                },
            },
        },

        //Her forgår de generelle label indstillinger
        {
            tabBarOptions: {
                labelStyle: {
                    fontSize: 15,
                },
                activeTintColor: 'green',
                inactiveTintColor: 'gray',
                size:40
            }
        }
    )

//Skyd det afsted så App.js kan bruge componenet
export default createAppContainer(TabNavigator)


