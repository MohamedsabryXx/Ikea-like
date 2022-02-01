import { Image } from "react-native";
import React from "react";

export default function LogoTitle() {
  return (
    <Image source={require("./IKEA.svg")} style={{ width: 30, height: 30 }} />
  );
}
