import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";


interface Astroid {
  Astroidid: string;
}

const AstroidData = ({ navigation, route }) => {
  const data: string = route.params.Astroidid;
  const [responseobject, setResponsobject] = useState({});
  let imageurl: string;
  useEffect(() => {
    getdata();
  });
  const getdata = async () => {
    const url = `https://www.neowsapp.com/rest/v1/neo/${data}?api_key=PbXb38sljx3DkxfrKlma06yFkAqRo0i3yauAbgj2`;
    const res = await fetch(url).then((res) => res.json());
    setResponsobject(res);
    imageurl = await responseobject.nasa_jpl_url;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textwhite}>{responseobject.name}</Text>
      <Text style={styles.textwhite}>
       is potentially hazardous:true {responseobject.is_potentially_hazardous_asteroid}
      </Text>
      <Image
        style={styles.image}
        source={{uri: responseobject.nasa_jpl_url}}
      />
    </View>
  );
};

export default AstroidData;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  textwhite: {
    color: "white",
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});
