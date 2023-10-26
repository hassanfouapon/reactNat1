 import React from "react";
import { Text, StyleSheet , View} from "react-native";
import { color } from "react-native-reanimated";


const ComponentsScreen= () =>{
    
    const name='hassan'

    return (
        <View>
        <Text style={styles.textStyle}>The first component screen</Text>
        <Text style={styles.grettingStyle}>Gretting started with React-Native</Text>
       
        <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    );


};

const styles= StyleSheet.create({
    textStyle:{
        fontSize: 30
    },
    grettingStyle:{
        fontSize:45

    },

    subHeaderStyle:{
        fontSize:50
        
    }

});

export default ComponentsScreen; 