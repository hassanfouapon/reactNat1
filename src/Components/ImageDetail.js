import React from "react";

import { View, StyleSheet, Text, Image } from "react-native";

const ImageDetail= (props) =>{
// ou bien je pouvais les passer directement en faisant const ImageDetail=({imageSoucrem, title, Score})
   //console.log(props)
    return(
        <View>
      <Image source={props.imageSoucre}/>  
     <Text>{props.title}</Text>
     <Text>Image Score - {props.Score}</Text>
     </View>
    );
    
};

const styles= StyleSheet.create({})



export default ImageDetail;

