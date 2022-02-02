import {
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Switch,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  LogBox,
} from "react-native";
import React, { useState, useEffect } from "react";
import { moderateScale } from "react-native-size-matters";
import { createClient } from "pexels";
import BuyItem from "./BuyItem";

export default function Home() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [newQuery, setQuery] = useState("furniture");
  const [isSelected, setIsSelected] = useState({
    selectedItem: null,
  });
  const [isImageSelected, setisImageSelected] = useState({
    status: false,
    image: "",
  });
  const [imageList, setImageList] = useState([]);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const roomFilter = [
    "All",
    "Bedroom",
    "Living room",
    "Kitchen",
    "Office Furniture",
    "Outdoor",
    "Bathroom",
    "Kids room",
    "Dinning room",
    "Hailway",
  ];

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

    const client = createClient(
      "563492ad6f91700001000001bffe60bab42643d5a80e494233df62be"
    );
    const query = `${newQuery}`;
    client.photos.search({ query, per_page: 20 }).then((photos) => {
      setImageList({
        src: photos.photos.map((item) => item.src.medium),
      });
    });
  }, [isSelected]);

  const onImagePress = (src) => {
    setisImageSelected({ status: true, image: src });
  };

  const onClosePress = () => {
    setisImageSelected(!isImageSelected);
  };

  return (
    <React.Fragment>
      {isImageSelected.status ? (
        <BuyItem
          src={isImageSelected.image}
          images={imageList}
          onClose={onClosePress}
        ></BuyItem>
      ) : null}
      {!isImageSelected.status ? (
        <React.Fragment>
          <ScrollView flex={1} style={styles.container}>
            <ImageBackground
              source={require("../img/alexandra.jpg")}
              style={styles.imageContainer}
              resizeMode="cover"
            ></ImageBackground>
            <View style={styles.personizeContainer}>
              <Text
                style={styles.textTitle}
                numberOfLines={1}
                adjustsFontSizeToFit
              >
                Personalize your inspiration
              </Text>
              <Text
                style={styles.TextContent}
                numberOfLines={2}
                adjustsFontSizeToFit
              >
                Allow browsing history data to give you better product
                recommendations
              </Text>
              <View style={styles.vectorView}>
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
                <Image
                  source={require("../img/hero-2.png")}
                  style={styles.imageVector}
                ></Image>
              </View>
            </View>
            <View>
              <Text
                style={styles.TextTitle}
                numberOfLines={1}
                adjustsFontSizeToFit
              >
                Explore, get inspired, and shop by room
              </Text>

              <ScrollView horizontal={true} style={{ flex: 1 }}>
                {roomFilter.map((btnName, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={{
                      backgroundColor:
                        isSelected.selectedItem === idx ? "#18181b" : "#d1d5db",
                      width: 140,
                      height: 40,
                      borderRadius: 20,
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      marginHorizontal: 5,
                    }}
                    onPress={() => {
                      setQuery(btnName), setIsSelected({ selectedItem: idx });
                    }}
                  >
                    <Text
                      style={{
                        color:
                          isSelected.selectedItem === idx ? "#fff" : "#000",
                      }}
                      numberOfLines={1}
                      adjustsFontSizeToFit
                    >
                      {btnName}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <FlatList
                nestedScrollEnabled
                data={imageList.src}
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
          </ScrollView>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    flexDirection: "column",
  },
  imageContainer: {
    height: 490,
  },
  HomeContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  personizeContainer: {
    margin: 20,
    padding: 25,
    backgroundColor: "#e4e4e7",
    borderRadius: 8,
  },
  textTitle: {
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  TextContent: {
    fontSize: 14,
    fontWeight: "400",
  },
  vectorView: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 15,
    flexDirection: "row",
    padding: 15,
    paddingTop: 15,
    alignItems: "center",
  },
  imageVector: {
    position: "relative",
    width: 50,
    height: 60,
  },
  TextTitle: {
    padding: 20,
    fontSize: 17,
    fontWeight: "700",
  },
  ButtonsNavigatorView: {
    paddingHorizontal: 20,
  },
  ButtonsNavigator: {
    width: 140,
    height: 40,
    borderRadius: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  productViewer: {
    width: 380,
    height: 380,
  },
  imageListScroll: {
    position: "relative",
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
  },
});
