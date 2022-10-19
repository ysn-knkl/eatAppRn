import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function BottomTabs({ navigation }) {
  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <Icon name="home" text="Home" navigation={navigation} />
      <Icon name="search" text="Browse" navigation={navigation} />
      <Icon name="shopping-bag" text="Grocery" navigation={navigation} />
      <Icon name="shopping-basket" text="Orders" navigation={navigation} />
      <Icon name="user" text="Account" navigation={navigation} />
    </View>
  );
}

const Icon = ({ name, text, navigation }) => (
  <TouchableOpacity
    style={{ flex: 1 }}
    onPress={() => navigation.navigate(text)}
  >
    <View style={{ alignItems: "center" }}>
      <FontAwesome
        name={name}
        size={25}
        style={{
          marginBottom: 3,
        }}
      />
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);
