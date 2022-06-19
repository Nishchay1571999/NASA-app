import { View, Text } from "react-native";
import React, { useState } from "react";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import AstroidData from "./src/screens/AstroidData";
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

const App = () => {
  const [astroidid, setAstroidID] = useState("");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title:'Welcome'}}
        />
        <Stack.Screen 
        name="AstroidData"
        component={AstroidData}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
