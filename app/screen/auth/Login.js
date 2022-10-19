import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { AuthContext } from "../../navigation/AuthProvider";

export default function Login({ navigation }) {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { login } = useContext(AuthContext);

  const onSignInPressed = () => {
    login(name, password);
  };

  return (
    <View style={style.root}>
      <View style={style.headerContainer}>
        <Text style={style.title}>Welcome Yasin's App</Text>
        <Text style={style.subTitle}>Enjoy the App</Text>
      </View>
      <View style={style.inputContainer}>
        <CustomInput
          placeholder={"name"}
          title="Name"
          value={name}
          setValue={setName}
        />
        <CustomInput
          placeholder={"Password"}
          title="Password"
          value={password}
          setValue={setPassword}
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} />
      </View>
      <View style={style.footerContainer}>
        <Text style={style.labelPrivacy}>
          By signing up, you agree to the
          <Text style={{ fontWeight: "bold" }}>Term of Service</Text> and
          <Text style={{ fontWeight: "bold" }}>Privacy Policy</Text>
        </Text>
        <TouchableOpacity
          style={style.loginButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={style.loginButtonText}>
            Don't have an account? Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ccc",
    paddingHorizontal: 20,
  },
  headerContainer: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  title: {
    fontSize: 52,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 24,
  },
  inputContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  footerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonSubmit: {
    paddingHorizontal: 50,
    width: "100%",
    height: 40,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#000000dd",
  },
  submitText: {
    color: "white",
    fontSize: 16,
  },
  labelPrivacy: {
    fontSize: 16,
    fontWeight: "400",
    alignSelf: "center",
    textAlign: "center",
  },
  loginButton: {
    alignSelf: "center",
  },
  loginButtonText: {
    color: "green",
  },
});
