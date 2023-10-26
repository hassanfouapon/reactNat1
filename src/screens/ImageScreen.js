import React from "react";
import ImageDetail from "../Components/ImageDetail";
import { View, StyleSheet, Text } from "react-native";

const ImageScreen= () =>{
    return (<View>
        <ImageDetail title="Forest" imageSoucre={require('../../assets/ROBINET-DARRET.jpg')} Score="core-9"/>
        <ImageDetail title="Beach" imageSoucre={require('../../assets/beach.jpg')} Score="core-8"/>
        <ImageDetail title="Mountain"imageSoucre={require('../../assets/mountain.jpg')} Score="core-7"/> 
    </View>
    );
};

const styles= StyleSheet.create({});



export default ImageScreen;

