import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";

export default function Browse({ navigation }) {
  return (
    <SafeAreaView style={style.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.main}>
          <Text>Browse</Text>
        </View>
      </ScrollView>
      <Divider width={1} />
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#eee",
  },
  main: {
    flex:1,
    alignItems: "center",
  },
});
