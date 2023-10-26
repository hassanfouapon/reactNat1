import React, { useState } from "react";

import { Button, StyleSheet, View , FlatList} from "react-native";



const ColorsScreen =()=>{
    const [colors, setColors]= useState([]);
    console.log(colors);
    return(
        <View>
            <Button title="Add a colors" 
            onPress={()=>{
                setColors([...colors, randomRgb()]);
            }}/>
            
            <FlatList
            keyExtractor={({item})=>item}
            data={colors}
            renderItem={({item})=>{
                //item=== rgb(0,0,0)
                return <View style={{height:100, width:500, backgroundColor:randomRgb()}}/>
            }}

            />

        </View>
    ); 
};

const randomRgb=()=>{
    const red = Math.floor(Math.random() *256);
    const green = Math.floor(Math.random() *256);
    const bleu = Math.floor(Math.random() *256);

    return `rgb(${red}, ${green}, ${bleu})` ;
};

const styles= StyleSheet.create({});


export default ColorsScreen;
