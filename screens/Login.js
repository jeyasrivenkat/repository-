import React from "react";
import {View,Text} from 'react-native'
import { TouchableOpacity } from "react-native-web";

export default class Login extends React.Component{
  render(){
    return(
      <View>
        <TouchableOpacity onPress={()=>{
          this.props.navigation.navigate('ProfileScreen')
        }}>
        <Text>
          
          Login Screen!
        </Text>
        </TouchableOpacity >
      </View>
    )
  }
}