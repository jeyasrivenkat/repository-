import React, { Component } from "react";
import {View} from 'react-native'
import GetStarted from './screens/GetStarted'
import Login from './screens/Login'
import ProfileScreen from './screens/ProfileScreen'

import { createAppContainer, createSwitchNavigator} from 'react-navigation';

const AppSwitchNavigator=createSwitchNavigator(
  {
    GetStarted:GetStarted,
    Login:Login,
    ProfileScreen:ProfileScreen,

  },
  {initialRouteName:'Login'}
)
const AppContainer=createAppContainer(AppSwitchNavigator)


export default class App extends Component{
  render(){
    return(
      <View>
        <AppContainer/>

        

       
      </View>
    )
  }

  
}