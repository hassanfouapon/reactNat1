//import {React, useState} from "react";
import {React, useReducer} from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../Components/ColorCounter";


const Color_increment= 15;

const reducer=(state, action)=>{
    // state=== {red: number, green:number,blue:number}
    //action=== {colorTochanges: 'red' || 'green' ||'blue', amount: 15 || -15}
      //action=== {type: 'change_red' || 'change_green' ||'change_blue', payload: 15 || -15}
    switch(action.type){

        case'change_red':
           return state.red + action.payload>255 || state.red + action.payload<0 ?
            state:{...state, red: state.red + action.payload};
            

        case 'change_blue':
            return state.blue + action.payload>255 || state.blue + action.payload<0 ?
            state:{...state, blue: state.blue + action.payload};


        case 'change_green':
            return state.green + action.payload>255 || state.green + action.payload<0 ?
            state:{...state, green: state.green + action.payload};

        default:
            return state;
        

    }

};

const SquareScreen =()=>{

    const [state, dispatch]= useReducer(reducer,{red:0, green:0, blue:0});
    const{red,green,blue,}= state;
 

    /* const [red, setRed]= useState(0);
    const [bleu, setBleu]= useState(0);
    const [green, setGreen]= useState(0); */



    //creating Reducer

    return (
        <View>
        <ColorCounter
        //  onIncrease={()=> setRed(red + Color_increment)}
        //  onIncrease={()=> dispatch({ColorTochange:'red', amount: Color_increment})}
        onIncrease={()=> dispatch({type:'change_red', payload: Color_increment})}
        // onDecrease={()=> setRed(red - Color_increment)} 
        // onDecrease={()=> dispatch({ColorTochange:'red', amount: -1* Color_increment})}
         onDecrease={()=> dispatch({type:'change_red', payload: -1* Color_increment})} 
         color="red"/>

        <ColorCounter 
        //onIncrease={()=> setBleu(bleu + Color_increment)}
        //onIncrease={()=>dispatch({ColorTochange:'blue', amount: Color_increment})}
        onIncrease={()=> dispatch({type:'change_blue', payload: -1* Color_increment})}
        //onDecrease={()=> setBleu(bleu - Color_increment)}
        //onDecrease={()=> dispatch({ColorTochange:'blue', amount: -1* Color_increment})}
        onDecrease={()=> dispatch({type:'change_blue', payload: -1* Color_increment})}
        color="blue"/>
        <ColorCounter 
        //onIncrease={()=> setGreen(green + Color_increment)}
        //onIncrease={()=> dispatch({ColorTochange:'green', amount: Color_increment})}
        onIncrease={()=> dispatch({type:'change_green', payload: -1* Color_increment})}
        //onDecrease={()=> setGreen(green - Color_increment)}
        //onDecrease={()=> dispatch({ColorTochange:'green', amount: -1* Color_increment})}
        onDecrease={()=> dispatch({type:'change_green', payload: -1* Color_increment})}
        
        color="green"/>

        <View style={{height :150, width :150, backgroundColor: `rgb(${state.red},${state.blue},${state.green})`}}/>
        </View>
    );
};

const styles= StyleSheet.create({});


export default SquareScreen;