import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import Favourite from "../screens/Favourite";
import Bag from "../screens/Bag";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
``
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" size={size} color={color} />;
          },
          title: "Be Inspired",
          tabBarShowLabel: false,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="search1" size={size} color={color} />;
          },
          tabBarShowLabel: false,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="person-outline" size={size} color={color} />;
          },
          tabBarShowLabel: false,
          title: "Welcome to IKEA",
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="heart" size={size} color={color} />;
          },
          tabBarShowLabel: false,
          title: "Save your favorites",
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Fontisto name="opencart" size={size} color={color} />;
          },
          tabBarShowLabel: false,
          title: "This bag is empty",
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
