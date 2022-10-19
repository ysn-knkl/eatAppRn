import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { AuthContext } from "../../navigation/AuthProvider";

export default function SignUp({ navigation }) {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");

  const { register } = useContext(AuthContext);

  const onSignUpPressed = () => {
    if(password.toLocaleLowerCase() === passwordConfirm.toLocaleLowerCase()){
      register(name,password)
    }
  };

  return (
    <View style={style.root}>
      <View style={style.headerContainer}>
        <Text style={style.title}>Welcome Yasin's App</Text>
        <Text style={style.subTitle}>Create an account</Text>
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
        <CustomInput
          placeholder={"Confirm Password"}
          title="Confirm Password"
          value={passwordConfirm}
          setValue={setPasswordConfirm}
        />
        <CustomButton text="Sign Up" onPress={onSignUpPressed} />
      </View>
      <View style={style.footerContainer}>
        <Text style={style.labelPrivacy}>
          By registering, you confirm that you accept our
          <Text style={style.textBold}> Term of Service</Text> and{" "}
          <Text style={style.textBold}>Privacy Policy</Text>
        </Text>
        <TouchableOpacity
          style={style.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={style.loginButtonText}>Have an account? Sign In</Text>
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
  textBold: {
    fontWeight: "bold",
  },
  footerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
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
