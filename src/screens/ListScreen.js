import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";


const ListScreen = () =>{
    const friends=[
    {name:'hassan', age: 32},
    {name:'houssein', age: 32},
    {name:'Dhul Qaranein', age: 30},
    {name:'Amir', age: 29},
    {name:'Aziza', age: 28},
    {name:'Ache', age: 27},
    {name:'Rakesh', age: 26},
    {name:'Vaishali',age: 25}
    ]
    return (
    <FlatList 
    keyExtractor={friend => friend.name}
    data={friends} 
    renderItem={({item})=>{
        return <Text>{item.name} - {item.age}</Text>
    }}/>);
    
};

const styles= StyleSheet.create({

});


export default ListScreen;