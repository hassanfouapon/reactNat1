import React from "react"

import { View, StyleSheet,Text } from "react-native"



const BoxScreen=()=>{
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child#1</Text>
            <Text style={styles.textTwoStyle}>Child#2</Text>
            <Text style={styles.textTrheeStyle}>Child#3</Text>
           
        </View>
    );
};


const styles = StyleSheet.create({

    viewStyle:{
        borderWidth:3,
        borderColor: 'black',
        //  alignItems: 'center',
        // flexDirection:'column',
        height:200,
        // justifyContent:'space-around'
    },

    textOneStyle:{
        borderWidth:3,
        borderColor:'red',
        
        
    },

    textTwoStyle:{
        borderWidth:3,
        borderColor:'red',
        // alignSelf:'stretch'
        // position:'absolute'
        fontSize:18,
        // top:10
        // bottom:10
        // left:10
        // right:10
       /*  position:'absolute',
        left:0,
        bottom:0,
        right:0,
        top:0,or this */
        ...StyleSheet.absoluteFillObject
        
    },

    textTrheeStyle:{
        borderWidth:3,
        borderColor:'red',
        
        
    }



});

export default BoxScreen;