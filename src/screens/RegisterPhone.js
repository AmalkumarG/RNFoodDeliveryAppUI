import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
    TouchableOpacity,
    FlatList,
  } from "react-native";
  import React, { useState } from "react";
  import Icons from "react-native-vector-icons/Ionicons";
  import Icons2 from "react-native-vector-icons/AntDesign";
  import Icons3 from "react-native-vector-icons/Zocial";
  import staticImageService from "../Services/staticImageService";
  import CountryCode from "../constants/CountryCode";
  import FlagDropdown from "../Components/FlagDropdown";

const RegisterPhone = ({navigation}) => {
  const [selectedcountry,Setselectedcountry]=useState(CountryCode.find(country=>country.name==="India"))
  const [stylepsition,setStylePosition]=useState(0)
  const dropDownStyle=(y)=>({...styles.dropDown, top : y+60})
  const [dropDownVisible,setdropDownVisible]=useState(false)
  const [dropDownLayout,setdropdownLayout]=useState({})
  const [phnNum,setphnNum]=useState("")
  const closeDropdown=(pageX,pageY)=>{
    if(dropDownVisible){
      if(pageX<dropDownLayout?.x||pageX>dropDownLayout?.x+dropDownLayout?.width||pageY<dropDownLayout?.y||pageY>dropDownLayout?.y+dropDownLayout?.height)
      {
        setdropDownVisible(false)

      }
    }
  }

  return (
    <View style={styles.container} onStartShouldSetResponder={({nativeEvent:{pageX,pageY}})=>closeDropdown(pageX,pageY)} >
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
         log into Food House
       </Text>
     </View>
     <View style={{alignItems:"center",textAlign:"center"}}>
     
     <Text
       style={{ fontSize: 25, marginTop: 40, marginBottom: 40, color: "gray",textAlign:"center" }}
     >
       Enter your registered phone number to log in.
     </Text>

     </View>
     <View style={styles.phone} onLayout={({nativeEvent:{layout:{y}}})=>setStylePosition(y)}>
     <TouchableOpacity style={styles.phoneCode} onPress={()=>setdropDownVisible(!dropDownVisible)}>
        <Image source={{uri:staticImageService.getFlag(selectedcountry.code)}} style={{height:20,width:20,marginLeft:5}}/>
        <Text>{selectedcountry.dial_code}</Text>
        <Icons name="caret-down-sharp"/>

     </TouchableOpacity>
     <View style={styles.phoneNumber} >
        <TextInput placeholder="phone number" keyboardType="number-pad" style={{marginLeft:5,marginTop:10,fontSize:20}} onChangeText={(text)=>setphnNum(selectedcountry.dial_code+text)} onFocus={()=>setdropDownVisible(false)}></TextInput>
     </View>
        
     </View>
     <TouchableHighlight style={styles.signInbutton} onPress={()=>navigation.navigate("otpVerification",{phnNum})}>
       <Text style={{ color: "white", fontSize: 20 }}> Continue</Text>
     </TouchableHighlight>
     {dropDownVisible && (<View style={dropDownStyle(stylepsition)} onLayout={({nativeEvent:{layout:{x,y,height,width}}})=>setdropdownLayout({x,y,height,width})}>
      <FlatList data={CountryCode}
        keyExtractor={(item)=>item.code}
        renderItem={({item})=><FlagDropdown {...item} onpress={(country)=>{
          Setselectedcountry(country)
          setdropDownVisible(false)
        }}/>}
      />
     </View>)
     }
    
     
    
     

     
   </View>
  )
}

export default RegisterPhone

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
        marginTop: 30,
      },
      phone:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"
      }, phoneCode:{
        flexDirection:"row",
        width:"25%",
        borderWidth:.2,height:50,
        alignItems:"center",borderColor:"gray",
        borderRadius:5
      },
      phoneNumber:{
        width:"60%",
        borderWidth:.5,
        height:50,
        marginLeft:20,
        borderWidth:.2,borderColor:"gray",
        borderRadius:5
      },
      dropDown:{height:400,width:300,position:"absolute",borderWidth:.5,zIndex:3,borderColor:"gray",backgroundColor:"#ebf0eb",borderRadius:10,}
})