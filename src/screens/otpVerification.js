import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
  } from "react-native";
  import React, { useRef, useState } from "react";
  import Icons from "react-native-vector-icons/Ionicons";
  import Icons2 from "react-native-vector-icons/AntDesign";
  import Icons3 from "react-native-vector-icons/Zocial";
const otpVerification = (  {route:{params:{phnNum}},navigation}
    ) => {
    const firstInput=useRef()
    const secondInput=useRef()

    const thirdInput=useRef()

    const fourthInput=useRef()
    const [otp,setotp]=useState({1:"",2:"",3:"",4:""})

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
         OTP Verification
       </Text>
     </View>
     <View style={{alignItems:"center",textAlign:"center"}}>
     <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 60 }}>
       Otp Verification
     </Text>
     <Text
       style={{ fontSize: 15, marginTop: 20, marginBottom: 10, color: "gray",textAlign:"center" }}
     >
       Enter the OTP code from the phone we just sent the code to{phnNum}
     </Text>

     </View>
    
    <View style={styles.otpContainer}>
        <View style={styles.otpbox} >
            <TextInput style={styles.otptxt} ref={firstInput} maxLength={1} keyboardType="number-pad"
            onChangeText={(text)=>{
                setotp({...otp,1:text})
                text &&secondInput.current.focus()}} />
        </View>
        <View style={styles.otpbox}>
            <TextInput style={styles.otptxt} ref={secondInput} maxLength={1} keyboardType="number-pad"
                onChangeText={(text)=>{
                    setotp({...otp,2:text})
                    text ?thirdInput.current.focus():firstInput.current.focus()}}
            />
        </View>
        <View style={styles.otpbox}>
            <TextInput style={styles.otptxt} ref={thirdInput} maxLength={1} keyboardType="number-pad"
                 onChangeText={(text)=>{
                    setotp({...otp,3:text})
                    text ?fourthInput.current.focus():secondInput.current.focus()}}
            />
        </View>
        <View style={styles.otpbox}>
            <TextInput style={styles.otptxt} ref={fourthInput} maxLength={1} keyboardType="number-pad"
                onChangeText={(text)=>{
                    setotp({...otp,4:text})
                    !text &&thirdInput.current.focus()}}
            />
        </View>
    </View>
    
     <TouchableHighlight style={styles.signInbutton}>
       <Text style={{ color: "white", fontSize: 20 }}> Verify</Text>
     </TouchableHighlight>

     
   </View>
  )
}

export default otpVerification

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
      otpContainer:{flexDirection:"row",justifyContent:"space-evenly",padding:15},
      otpbox:{width:"20%",height:60,borderWidth:.2,margin:10,borderRadius:5,justifyContent:"center",alignItems:"center"},
      otptxt:{fontSize:30}
})