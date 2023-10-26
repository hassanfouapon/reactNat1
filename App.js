import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorsScreen from "./src/screens/ColorsScreen";
import SquareScreen from "./src/screens/SquareScrenn";
import TextScren from "./src/screens/TextScreen";
import TextScrenOnPassword from "./src/screens/TextScreenOnPassword";
import BoxScreen from "./src/screens/BoxScreens";
import ExerciceBoxScrenn from "./src/screens/ExerciceBoxScreen";

const  navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentsScreen,
    List:ListScreen,
    Image:ImageScreen,
    Counter:CounterScreen,
    Colors:ColorsScreen,
    Square:SquareScreen,
    Texte:TextScren,
    password: TextScrenOnPassword,
    Box:BoxScreen,
    Exercice:ExerciceBoxScrenn
   
    
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "Udemy",
    },
  }
);

export default createAppContainer(navigator);
