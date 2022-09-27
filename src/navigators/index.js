import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from 'react-native-vector-icons/Entypo';
import Icons2 from "react-native-vector-icons/MaterialIcons"
import {
  ForgottPassword,
  home,
  location,
  Login,
  otpVerification,
  RegisterPhone,
  SignUp,
  splashsreen,
  Welcome,
} from "../screens";
import { connect } from "react-redux";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const bottomTab=createBottomTabNavigator()

const Mytab=()=>{
  return(
    <bottomTab.Navigator  
     tabBarShowLabel={false}
     screenOptions={{
      tabBarStyle:{
        backgroundColor: 'yellow',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 10,
        position: 'relative',
        marginTop: 5,
        padding: 5,
        bottom: 20,
      }

     }}
    
     >
      <bottomTab.Screen name="home" component={home} options={{headerShown:false,
       tabBarIcon: ({focused}) =>focused? <Icons name="home" size={25} color={"blue"}  />:<Icons name="home" size={25} color={"gray"} />,tabBarActiveTintColor:"blue",tabBarInactiveTintColor:"gray"}}/>
      <bottomTab.Screen name="cart" component={home}
       options={{headerShown:false,
       tabBarIcon: ({focused}) =>focused? <Icons name="shopping-cart" size={25} color={"blue"}  />:<Icons name="shopping-cart" size={25} color={"gray"} />,tabBarActiveTintColor:"blue",tabBarInactiveTintColor:"gray"}}/>
       <bottomTab.Screen name="offers" component={home} options={{headerShown:false,
       tabBarIcon: ({focused}) =>focused? <Icons2 name="local-offer" size={25} color={"blue"}  />:<Icons2 name="local-offer" size={25} color={"gray"} />,tabBarActiveTintColor:"blue",tabBarInactiveTintColor:"gray"}}/>
      <bottomTab.Screen name="account" component={home}
       options={{headerShown:false,
       tabBarIcon: ({focused}) =>focused? <Icons name="user" size={25} color={"blue"}  />:<Icons name="user" size={25} color={"gray"} />,tabBarActiveTintColor:"blue",tabBarInactiveTintColor:"gray"}}/>
      
      

    </bottomTab.Navigator>
  )
}

const MyDrawer = () => {
  return (
    <Drawer.Navigator  initialRouteName={"home"} screenOptions={{headerShown:false}}>
      <Drawer.Screen name="home" component={home} />
    </Drawer.Navigator>
  );
};

const Navigator = ({ token }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
                 

      {/* <Stack.Screen name="home" component={home} /> */}
        {!token ? (
          <>
            <Stack.Screen name="Splashscreen" component={splashsreen} />

            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgottPassword" component={ForgottPassword} />
            <Stack.Screen name="RegisterPhone" component={RegisterPhone} />
            <Stack.Screen name="otpVerification" component={otpVerification} />
          </>
        ) : (
          <>
          {/* <Stack.Screen name="locationScreen" component={location} />
          <Stack.Screen name="Drawer" component={Mytab} /> */}

          <Stack.Screen name="home" component={home} />
            
            
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.GeneralReducer.token,
    locations:state.GeneralReducer.locations
  };
};
export default connect(mapStateToProps)(Navigator);
