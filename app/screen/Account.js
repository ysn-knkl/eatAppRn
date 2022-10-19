import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useContext } from "react";
import CustomButton from "../components/CustomButton";
import { AuthContext } from "../navigation/AuthProvider";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";

export default function Account({navigation}) {
  const { logout,user } = useContext(AuthContext);
  return (
    <SafeAreaView style={style.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.main}>
            <Text>Hi!! {user?.email}</Text>
          <CustomButton text="Log out" onPress={() => logout()} />
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
    flex: 1,
    height:200,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
