import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function BuyItem(props) {
  return (
    <View style={styles.productContainer}>
      <Image source={{ uri: props.src }} style={styles.image}></Image>
      <TouchableOpacity onPress={props.onClose} style={styles.closeBtn}>
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 450,
  },
  productContainer: {
    flex: 1,
    flexDirection: "column",
  },
  closeBtn: {
    padding: 10,
    position: "absolute",
    top: 15,
    left: 15,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
});
