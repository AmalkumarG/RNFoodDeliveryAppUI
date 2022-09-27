import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import Icons from "react-native-vector-icons/Ionicons";
  import Icons2 from "react-native-vector-icons/AntDesign";
  import Icons3 from "react-native-vector-icons/Zocial";

const ForgottPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
    <StatusBar
       barStyle={"dark-content"}
       backgroundColor="white"
       translucent
     ></StatusBar>
     <View style={{ height: 40 }}></View>
     <View style={styles.SignUp}>
       <Icons
         name="chevron-back"
         size={30}
         onPress={() => navigation.goBack()}
       />
       <Text
         style={{
           textAlign: "center",
           width: "90%",
           fontSize: 20,
           color: "#207865",
           fontWeight: "bold",
           marginLeft: -10,
         }}
       >
         SignIn
       </Text>
     </View>
     <View style={{alignItems:"center",textAlign:"center"}}>
     <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 60 }}>
       Forgot Password
     </Text>
     <Text
       style={{ fontSize: 15, marginTop: 20, marginBottom: 10, color: "gray",textAlign:"center" }}
     >
       Please enter your Email address so we can hel you to recover your account 
     </Text>

     </View>
    
     <View style={styles.input2}>
       <Icons3 style={{ width: "10%",marginLeft:4 }} name="email" size={20} color="gray" />
       <TextInput
         style={{ width: "90%" }}
         placeholder="Email address"
         placeholderTextColor={"gray"}
       />
     </View>
    
     <TouchableHighlight style={styles.signInbutton}>
       <Text style={{ color: "white", fontSize: 20 }}> Reset Password</Text>
     </TouchableHighlight>

     
   </View>
  )
}

export default ForgottPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",backgroundColor:"white"
      },
      SignUp: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
      },
      input: {
        borderWidth: 1,
        height: 50,
        width: "90%",
        marginTop: 30,
        borderRadius: 10,
        borderColor: "gray",
        flexDirection: "row",
        alignItems: "center",
      },
      input2: {
        borderWidth: 1,
        height: 50,
        width: "90%",
        marginTop: 20,
        borderRadius: 10,
        borderColor: "gray",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      },
      signInbutton: {
        backgroundColor: "#207865",
        color: "white",
        height: 50,
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 10,
      },
})