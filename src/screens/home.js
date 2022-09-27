import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  StatusBar,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { DrawerActions } from "@react-navigation/native";
import Icons from "react-native-vector-icons/Feather";
import Icons2 from "react-native-vector-icons/EvilIcons";
import Icons3 from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import GeneralActions from "../Actions/GeneralActions";
import { Food } from "../Components";

import { useState } from "react";
import Mock from "../Components/Mock";
import { images } from "../constants";
import FoodComp from "../Components/foodComp";
import abc from "../Components/abc";
import { useEffect } from "react";

const home = ({ navigation }) => {
  const [activityCategory, setactivityCategory] = useState();
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((json)=>setData(json))
    console.log(data);
  },[])

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="#207865"
      ></StatusBar>
      <View style={styles.curvedcontainer}></View>
      <View style={styles.headercontainer}>
        <View style={styles.locationheader}>
          <Icons2 name="location" size={35} color="white" />
          <Text style={{ color: "white", fontSize: 15 }}>Delivered to</Text>
          <Text style={{ color: "yellow", fontSize: 15 }}>HOME</Text>
          <Icons2 name="chevron-down" size={25} />
          <Text
            style={{
              backgroundColor: "yellow",
              height: 16,
              width: 16,
              top: -10,
              right: -2,
              position: "absolute",
              borderRadius: 32,
              fontSize: 13,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            12
          </Text>
          <Icons3
            name="bell-alert-outline"
            size={30}
            style={{ position: "absolute", right: 0 }}
          />
        </View>
        <View style={styles.searchbar}>
          <View
            style={{
              flexDirection: "row",
              fontSize: 30,
              alignItems:"center"
            }}
          >
            <Icons2 name="search" size={30} />
            <TextInput
              placeholder="search"
              placeholderTextColor={"grey"}
              style={{ fontSize: 20 }}
            />
          </View>

          <Icons name="sliders" size={30} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          {Mock.Food.map(({ name, logo }) => (
            <FoodComp
              name={name}
              logo={logo}
              activityCategory={activityCategory}
              setactivityCategory={setactivityCategory}
            />
          ))}
        </View>
      </View>
      <View>
        {data.map((post)=>
        <Text>{data.tittle}</Text>)}
      </View>

    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  curvedcontainer: {
    backgroundColor: "#207865",
    height: 2000,
    position: "absolute",
    top: -1 * (2000 - 230),
    width: 2000,
    borderRadius: 2000,
    alignSelf: "center",
    zIndex: -1,
  },
  headercontainer: {
    justifyContent: "space-evenly",
  },
  locationheader: { flexDirection: "row", alignItems: "center", margin: 20 },
  searchbar: {
    backgroundColor: "white",
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    padding: 10,
    borderRadius:10,marginBottom:20
  },
});

{
  /* <Text>{locations}</Text>
    <View style={styles.navbar}>
      <Icons2 name='view-sidebar' size={30} color="#207865" onPress={()=>navigation.openDrawer("Drawer")}/>
      <Text>Home</Text>
      <Icons2 name='shopping-cart' size={30}/>
    </View>
      <Text>home</Text>
      <TouchableHighlight style={{backgroundColor:"blue"}} >
        <Text>click</Text>
      </TouchableHighlight> */
}
