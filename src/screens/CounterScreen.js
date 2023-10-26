import React from "react";
import { View, Text , StyleSheet, Button } from "react-native";
import { useState } from "react";

const CounterScreen =()=>{

    const [counter,setCounter] = useState(0);

    //let counter = 0;
    return(
    <View>
        <Button
        title="Increase"
        onPress={()=>{
            //counter++;
            setCounter(counter +1);
        }}
        />

        <Button
        title="Decrease"
        onPress={()=>{
            setCounter(counter -1);
        }}
        />
        <Text>Current count: {counter}</Text>
    </View>
    
    ); 
};

const styles= StyleSheet.create({});


export default CounterScreen;