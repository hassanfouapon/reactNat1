import React from "react";
import { View, StyleSheet } from "react-native";

const ExerciceBoxScrenn=()=>{
    return(
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle}/>
            <View style={styles.viewToParent}>
            <View style={styles.viewTwoStyle}/>
            </View>
            <View style={styles.viewTrheeStyle}/>
        </View>
    );
};


const styles= StyleSheet.create({

    parentStyle:{
        borderWidth:3,
        borderColor:'black',
        height:200,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    viewOneStyle:{
        width:50,
        height:50,
        backgroundColor:'red'
    },

    viewTwoStyle:{
        height:50,
        width:50,
        backgroundColor:'green',
        top:10
    },
    viewToParent:{
        height:100,
        justifyContent:'flex-end'

    },
    viewTrheeStyle:{
        height:50,
        width:50,
        backgroundColor:'yellow'
    }




});


export default ExerciceBoxScrenn;