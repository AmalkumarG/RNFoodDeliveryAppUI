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
import images from "../constants/images";
import { Toggle } from "../Components";
import AuthenticationService from "../Services/AuthenticationService";
import { connect } from "react-redux";
import GeneralActions from "../Actions/GeneralActions";

const Login = ({ navigation,setToken }) => {
  const [viewPassword, setviewPassword] = useState(true);
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [errorMsg,setErrorMsg]=useState("")


  const login=async()=>{
    let user={
      username,password
    }
    AuthenticationService.login(user).then(response=>{
      setToken(response.data)
      console.log(response)
      if(!response.status){
        console.log(response.message)
        setErrorMsg(response.message)

      }
      else{
        setErrorMsg(response.message)
      }
    })
  }
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor="white"
        translucent
      ></StatusBar>
      <View style={{ height: 40 }}></View>
      <View style={styles.login}>
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
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 60 }}>
        Welcome
      </Text>
      <Text
        style={{ fontSize: 15, marginTop: 20, marginBottom: 10, color: "gray" }}
      >
        Enter your Username and Password and Enjoy ordering your food
      </Text>
      <View style={styles.input2}>
        <Icons2 style={{ width: "10%" }} name="user" size={20} color="gray" />
        <TextInput
          style={{ width: "90%" }}
          placeholder="Username"
          placeholderTextColor={"gray"}
          onChangeText={(text)=>setUsername(text)}
        />
      </View>
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
          onChangeText={(text)=>setPassword(text)}

        />
        <Icons
          style={{ width: "10%" }}
          name={viewPassword ? "eye" : "eye-off"}
          size={20}
          color="gray"
          onPress={() => setviewPassword(!viewPassword)}
        />
      </View>
      <View style={styles.remfor}>
        <View
          style={{ flexDirection: "row", width: "40%", alignItems: "center" }}
        >
          <Toggle />
          <Text>Remember Me</Text>
        </View>
        <Text onPress={()=>navigation.navigate("ForgottPassword")}>Forgot Password?</Text>
      </View>
      <TouchableHighlight style={styles.signInbutton} onPress={()=>login()}>
        <Text style={{ color: "white", fontSize: 20 }}>Sign In</Text>
      </TouchableHighlight>
      <Text>{errorMsg}</Text>
      <Text style={{ marginTop: 10 }}>
        Don't have an account? <Text style={{ color: "#207865" }} onPress={()=>navigation.navigate("SignUp")}>SignUp</Text>
      </Text>
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
  );
};
const mapDispatchToProps=(dispatch)=>{
  return{
    setToken:(token)=>dispatch(GeneralActions.setToken(token))
  }
  

}
export default connect(null,mapDispatchToProps) (Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"white"
  },
  login: {
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
