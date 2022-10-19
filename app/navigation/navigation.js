import React, { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RestaurantDetail from "../screen/RestaurantDetail";
import { Provider as ReduxPovider } from "react-redux";
import { store } from "../redux/store";
import OrderCompleted from "../screen/OrderCompleted";
import { AuthContext } from "./AuthProvider";
import { auth } from "../firebase";
import Login from "../screen/auth/Login";
import Home from "../screen/Home";
import SignUp from "../screen/auth/SignUp";
import Account from "../screen/Account";
import Browse from "../screen/Browse";
import Grocery from "../screen/Grocery";
import Orders from "../screen/Orders";

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const [initializing, setInitializing] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const screenOptions = {
    headerShown: false,
  };

  if (initializing) return null;

  return (
    <ReduxPovider store={store}>
      {user ? (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={screenOptions}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
            <Stack.Screen name="Browse" component={Browse} />
            <Stack.Screen name="Grocery" component={Grocery} />
            <Stack.Screen name="Orders" component={Orders} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen
              name="RestaurantDetail"
              component={RestaurantDetail}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={screenOptions}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </ReduxPovider>
  );
}
