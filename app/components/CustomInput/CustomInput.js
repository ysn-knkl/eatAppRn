import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function CustomInput({ placeholder, value, title, setValue }) {
  return (
    <View style={style.container}>
      <Text style={style.labelText}>{title}</Text>
      <View style={style.inputContainer}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          style={style.input}
        ></TextInput>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputContainer: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: "gray",
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  input: {
    fontSize: 20,
  },
  labelText: {
    fontSize: 20,
    fontWeight: "400",
  },
});
