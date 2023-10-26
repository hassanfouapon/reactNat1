import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

//ici navigation est un props le composent HomeSCreen prend en parametre
const HomeScreen = ({navigation}) => {
  return (
    <View>
  <Text style={styles.text}>Hi! Hassan</Text>

  <Button

    onPress={()=> navigation.navigate('Components')}
   title="Go to components Demo"
   />

  <Button
onPress={()=> navigation.navigate('List')}
title="Go to List Demo"
/>

<Button
onPress={()=> navigation.navigate('Image')}
title="Go to ImageScreen"
/>
<Button
title="Go to CounterScreen" 
onPress={()=> navigation.navigate('Counter')}

/>

<Button
title="Go to Colors" 
onPress={()=> navigation.navigate('Colors')}

/>

<Button
title="Go to SquareScreen"
onPress={()=>navigation.navigate('Square')}
/>


<Button
title="Go to TextScreen"
onPress={()=>navigation.navigate('Texte')}
/>

<Button
title="Go to TextScreenOnPassword"
onPress={()=>navigation.navigate('password')}
/>

<Button
title="Go to BoxScreen"
onPress={()=>navigation.navigate('Box')}
/>
<Button
title="Go to ExercieBoxScreen"
onPress={()=>navigation.navigate('Exercice')}
/>

   <TouchableOpacity onPress={()=> navigation.navigate('List')}>
    <Text>Go to List Demo</Text>
    <Text>Go to List Demo</Text>
    <Text>Go to List Demo</Text>
   </TouchableOpacity>
  </View> 
    
  );
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
