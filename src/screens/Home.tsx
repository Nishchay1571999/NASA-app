import { View, Text, SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";

const Home = ({navigation}) => {
    const [astroidid, setAstroidID] = useState("");
  return (
    <SafeAreaView>
      <View style = {styles.container}>
        <TextInput style={styles.textfield} placeholder="Enter astroid id" onChangeText={(text:string)=> setAstroidID(text)}/>
        <Button title="Submit" onPress={()=>{
            navigation.navigate('AstroidData',{Astroidid:astroidid})
        }}/>
        <View style={styles.border}/>
        <Button title="Random astroid" onPress={()=>{
            navigation.navigate('AstroidData',{Astroidid:"random"})
        }}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginTop:150,
    padding:30,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
  },
  textfield:{
    width:200,
    fontSize:18,
    marginBottom:10
  },
  border:{
    height:10,
    margin:20,
    padding:20,
  }
});

export default Home;
