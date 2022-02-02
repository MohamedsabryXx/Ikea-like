import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Animated,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import SlidingUpPanel from "rn-sliding-up-panel";
import { SimpleLineIcons } from "@expo/vector-icons";
const { height } = Dimensions.get("window");

export default function BuyItem(props) {
  const draggableRange = { top: height / 1.5, bottom: 180 };

  const draggedValue = new Animated.Value(180);
  return (
    <View style={styles.productContainer}>
      <Image source={{ uri: props.src }} style={styles.image}></Image>
      <TouchableOpacity onPress={props.onClose} style={styles.closeBtn}>
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>

      <SlidingUpPanel
        draggableRange={draggableRange}
        animatedValue={draggedValue}
        snappingPoints={[360]}
        height={height}
        friction={0.5}
      >
        <ScrollView>
          <View style={styles.container}>
            <SimpleLineIcons
              style={{ padding: 10 }}
              name="arrow-down"
              size={24}
              color="black"
            />
            <View style={styles.panel}>
              <Text style={styles.textHeader}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
              <Text style={styles.textBody}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
              <FlatList
                data={props.images.src}
                renderItem={(item, idx) => (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      padding: 10,
                      marginTop: 20,
                      justifyContent: "center",
                    }}
                    key={item.index}
                  >
                    <View>
                      <TouchableOpacity onPress={() => onImagePress(item.item)}>
                        <Image
                          source={{
                            uri: item.item,
                          }}
                          style={{
                            width: 170,
                            height: 260,
                            borderRadius: 10,
                          }}
                        ></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                keyExtractor={(item, idx) => idx}
                numColumns={2}
              ></FlatList>
            </View>
          </View>
        </ScrollView>
      </SlidingUpPanel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  image: {
    height: 600,
    resizeMode: "cover",
  },
  productContainer: {
    flex: 1,
    flexDirection: "column",
  },
  closeBtn: {
    padding: 12.5,
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  panel: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  panelHeader: {
    height: 180,
    backgroundColor: "#b197fc",
    justifyContent: "flex-end",
    padding: 24,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 15,
  },
  textBody: {
    fontSize: 16,
  },
});
