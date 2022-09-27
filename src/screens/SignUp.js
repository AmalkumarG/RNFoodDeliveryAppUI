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
  import images from "../constants/images";
  import AuthenticationService from "../Services/AuthenticationService";


    
    
    
    
    
const SignUp = ({navigation}) => {
    const [viewPassword, setviewPassword] = useState(true);
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [errorMsg,seterrorMsg]=useState("")
    const [userErrorMsg,setuserErrorMsg]=useState("")
    const [emailErrorMsg,setemailrErrorMsg]=useState("")
    const [emailState,setemailState]=useState("default")
    const [userState,setuserState]=useState("default")
    const inputStyle=(a)=>{
      console.log(a)
      switch(a){
        case "valid":return{...styles.input2,borderColor:"green"}
        case "invalid":return{...styles.input2,borderColor:"red"}
        default:return styles.input2
  
      }}


    const register=()=>{
      let user={
        username,email,password
      }
      console.log(user)
      AuthenticationService.register(user).then(response=>{console.log(response)
      if(!response.status){
        seterrorMsg(response.message)
      }
      else{
        navigation.navigate("RegisterPhone")


      }
      })

    }
    const checkUserExist=async(type,value)=>{
      if(value.length>0){
        AuthenticationService.userExist(type,value).then(response=>{
          console.log(response)
          if(response.status){
            // type==="email"?setemailState("valid"):null;
            type==="email"&&emailErrorMsg?(setemailrErrorMsg(""),setuserState("valid")):null;
            // type==="email"?setuserState("valid"):null;
            type==="username"&&userErrorMsg?(setuserErrorMsg(""),setuserState("valid")):null;
           


          }
          else{
            type==="email"?(setemailrErrorMsg(response.message),setemailState("invalid")):null
            // type==="email"?setemailState("invalid"):null
            type==="username"?(setuserErrorMsg(response.message),setuserState("invalid")):null
            // type==="email"?setuserState("invalid"):null



          }
        })
      }
    }




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
        Create Account
      </Text>
      <Text
        style={{ fontSize: 15, marginTop: 20, marginBottom: 10, color: "gray",textAlign:"center" }}
      >
        Enter your Username, Email and Password to signup <Text style={{color:"blue"}}>Already have an Account?</Text>
      </Text>

      </View>
      <View style={inputStyle(userState)}>
        <Icons2 style={{ width: "10%" }} name="user" size={20} color="gray" />
        <TextInput
          style={{ width: "90%" }}
          placeholder="Username"
          placeholderTextColor={"gray"}
          onChangeText={(text)=>setusername(text)}
          onEndEditing={({nativeEvent:{text}})=>checkUserExist("username",text)}
        />
      </View>
      <Text style={{color:"red"}}>{userErrorMsg}</Text>
      <View style={inputStyle(emailState)}>
        <Icons3 style={{ width: "10%",marginLeft:4 }} name="email" size={20} color="gray" />
        <TextInput
          style={{ width: "90%" }}
          placeholder="Email address"
          placeholderTextColor={"gray"}
          onChangeText={(text)=>setemail(text)}
          onEndEditing={({nativeEvent:{text}})=>checkUserExist("email",text)}


        />
      </View>
      <Text style={{color:"red"}}>{emailErrorMsg}</Text>
      <View style={styles.input2}>
        <Icons
          name="lock-closed-outline"
          style={{ width: "10%" }}
          size={20}
          color="gray"
        />
        <TextInput
          style={{ width: "80%" }}
          placeholder="Password"
          secureTextEntry={viewPassword}
          placeholderTextColor={"gray"}
          onChangeText={(text)=>setpassword(text)}

        />
        <Icons
          style={{ width: "10%" }}
          name={viewPassword ? "eye" : "eye-off"}
          size={20}
          color="gray"
          onPress={() => setviewPassword(!viewPassword)}
        />
      </View>
      <Text style={{color:"red"}}>{errorMsg}</Text>
      <TouchableHighlight style={styles.signInbutton} onPress={()=>register()}>
        <Text style={{ color: "white", fontSize: 20 }}> Create Account</Text>
      </TouchableHighlight>
      <Text style={{ fontWeight: "bold", marginTop: 10 }}>OR</Text>

<TouchableHighlight style={styles.googleorfacebook}>
  <View style={styles.googleorfacebookbtn}>
    <Image
      source={images.GOOGLE}
      style={{ height: 20, width: 20, marginRight: 20 }}
    />
    <Text style={{ color: "white", fontSize: 15 }}>
      SignIn with Google
    </Text>
  </View>
</TouchableHighlight>
<TouchableHighlight style={styles.googleorfacebook2}>
  <View style={styles.googleorfacebookbtn}>
    <Image
      source={images.FACEBOOK}
      style={{ height: 20, width: 20, marginRight: 20 }}
    />

    <Text style={{ color: "white", fontSize: 15 }}>
      SignIn with Facebook
    </Text>
  </View>
</TouchableHighlight>
    
      
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor:"white"
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
    remfor: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      padding: 10,
      alignItems: "center",
    },
    googleorfacebook: {
      backgroundColor: "#2b56a1",
      height: 50,
      width: "80%",
      color: "white",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
    },
    googleorfacebook2: {
      backgroundColor: "#4f82db",
      height: 50,
      width: "80%",
      color: "white",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
    },
    googleorfacebookbtn: { flexDirection: "row" },
  });