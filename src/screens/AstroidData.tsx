import { View, Text, StyleSheet, Image, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Astroid {
  Astroidid: string;
}

const AstroidData = ({ navigation, route }) => {
  const data: string = route.params.Astroidid;
  const [responseobject, setResponsobject] = useState({});
  const [loading, setLoading] = useState(true);
  const [valid, setvalid] = useState<boolean>(false);
  let imageurl: string;
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    if (data !== "random") {
      const url = `https://www.neowsapp.com/rest/v1/neo/${data}?api_key=PbXb38sljx3DkxfrKlma06yFkAqRo0i3yauAbgj2`;
      const res = await axios
        .get(url)
        .catch((err) => {
          Alert.alert("Enter a valid Astroid ID");
          
          setvalid(false);
          setLoading(false);
        })
        .then((res) => res.data);
      setResponsobject(res);
      imageurl = await responseobject.nasa_jpl_url;
      setLoading(false);
    } else {
      const url = `https://www.neowsapp.com/rest/v1/neo/3542519?api_key=PbXb38sljx3DkxfrKlma06yFkAqRo0i3yauAbgj2`;
      const res = await fetch(url).then((res) => res.json());
      setResponsobject(res);
      // console.log(responseobject)
      imageurl = await responseobject?.nasa_jpl_url;
      setvalid(true)
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      {valid && (
        <View style={styles.container}>
          <Text style={styles.textwhite}>Name:{responseobject?.name}</Text>
          <Text style={styles.textwhite}>
            Designation:
            {responseobject?.designation}
          </Text>
          <Image
            style={styles.image}
            source={{ uri: responseobject.nasa_jpl_url }}
          />
          <Text>{responseobject.nasa_jpl_url}</Text>
          <View style={styles.border} />
        </View>
      )}
      <View style={styles.border} />
      <View style={{
        position:'absolute',
        top:100,
        right:150,
        
        width:100
      }}>
        <Button title="GO BACK" onPress={() => navigation.goBack()} />
      </View>
    </>
  );
};

export default AstroidData;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  textwhite: {
    color: "black",
    fontSize: 20,
  },
  image: {
    width: 10,
    height: 10,
    borderColor: "black",
  },
  loading: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
  },
  border: {
    height: 10,
    margin: 20,
    padding: 20,
  },
});
