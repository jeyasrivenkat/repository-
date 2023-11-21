import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'


export default class GetStarted extends React.Component{
  render(){
    return(
      <View style={styles.startView}>
        <TouchableOpacity style={styles.startButton} onPress={()=>{
          this.props.navigation.navigate('ProfileScreen')

        }}>
            <Text style={styles.startButtonText}>
                Get Started!
            </Text>
        </TouchableOpacity>
       
      </View>
    )
  }
}
const styles=StyleSheet.create({
    startButton:{
        
       
        backgroundColor:'red',
        marginLeft:850,
        width:'70%',
        height:'10%',
      borderRadius:30 
       
    },
    startButtonText:{
        justifyContent:'center',
        alignItems:'center',
        fontWeight:'bold',
        fontSize:40,
        marginLeft:300
    },

    startView:{
      flex:1,
      justifyContent:'center'
    }
})