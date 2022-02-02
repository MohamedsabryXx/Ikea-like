import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";
import { MaterialIcons } from "@expo/vector-icons";

export default function Profile() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const sectionList = [
    "Purchases",
    "Settings",
    "Data Preferences",
    "Policies",
    "Feedback",
    "Customer Support",
    "About the app",
  ];

  return (
    <ScrollView style={styles.welcomeContainer} justifyContent="space-between">
      <Text style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
      <Text style={styles.text}>IKEA for Business</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnLogIn}>
          <Text style={{ color: "#fff", fontWeight: "800", fontSize: 16 }}>
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSign}>
          <Text style={{ fontWeight: "800", fontSize: 16 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.vectorView}>
        <View style={styles.inStore}>
          <Ionicons name="barcode-outline" size={24} color="black" />
          <Text style={{ marginLeft: 8, fontSize: 14 }}>
            Scan Items In-store
          </Text>
        </View>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{
            transform: [
              { scaleX: moderateScale(1, 1) },
              { scaleY: moderateScale(1, 1) },
            ],
          }}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          ios_backgroundColor="#3e3e3e"
        ></Switch>
      </View>
      <FlatList
        data={sectionList}
        renderItem={(item, idx) => (
          <TouchableOpacity style={styles.sectionList}>
            <Text style={{ fontSize: 16 }}>{item.item}</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, idx) => idx}
      ></FlatList>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  vectorView: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 15,
    flexDirection: "row",
    padding: 15,
    paddingTop: 15,
    alignItems: "center",
  },
  text: {
    marginBottom: 30,
  },
  welcomeContainer: {
    padding: 20,
    flex: 1,
    flexDirection: "column",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  btnLogIn: {
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: "#3b82f6",
    marginRight: 5,
  },
  btnSign: {
    marginLeft: 5,
    borderWidth: 1,
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 25,
    borderColor: "#374151",
    borderStyle: "solid",
  },
  inStore: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  sectionList: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 25,
    borderBottomColor: "#000",
    borderBottomWidth: 0.4,
  },
});
