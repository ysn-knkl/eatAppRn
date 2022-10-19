import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CustomInput({text="Button", onPress}) {
  return (
    <Pressable onPress={onPress} style={style.container}>
      <Text style={style.text}>
       {text}
      </Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  container: {
    width:"50%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#000000dd",
    padding:15
  },
  text:{
    color:"white",
    fontWeight:"bold"
  }
 
});
