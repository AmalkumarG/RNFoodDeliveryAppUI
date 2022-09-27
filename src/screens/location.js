import { StyleSheet, Text, View ,StatusBar} from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon  from 'react-native-vector-icons/Entypo'
import * as Location from "expo-location"
import { connect } from 'react-redux'
import GeneralActions from '../Actions/GeneralActions'
import { useSelector,useDispatch } from 'react-redux'

const location = ({navigation,setLocation}) => {
    const locations=useSelector(state=>GeneralActions.setLocation.locations)
    const dispatch=useDispatch()

    const [error,seterror]=useState("")
    const [address,setAddress]=useState("")
    const [displayAddress,setdisplayAddress]=useState("")
    useEffect(()=>{
        (async()=>{
            let stat=await Location.requestBackgroundPermissionsAsync()
            if(stat!=="granted") seterror("permission not granted")
            let location=await Location.getCurrentPositionAsync({})
            let {coords}=location
            if(coords){
                let {latitude,longitude}=coords
                let addressResponse =await Location.reverseGeocodeAsync({latitude,longitude})
                

                for(i of addressResponse){
                    setAddress(i)
                    let currentAddress=`${i.name},${i.street},${i.postalCode},${i.country}`
                   
                    setdisplayAddress(currentAddress)
                    
                    setTimeout(()=>{navigation.navigate("Drawer")},3000)
                    


                    return
                }
                locations=currentAddress
                dispatch(setLocation(locations))
                console.log(locations);
            }
        })()
    },[])
  return (
    <View style={styles.container}>
    <StatusBar style={styles.statusbar}></StatusBar>
      <View>
        <Icon name="location" size={150} />
      </View>
      <Text style={styles.ltext}>Your current Location</Text>
      <Text style={styles.ltext}>{displayAddress}</Text>
    </View>
  )
 
}

export default location

const styles = StyleSheet.create({
    container:{
        flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#207865"
    },statusbar:{
        backgroundColor:"#207865"
    },
    ltext:{alignItems:"center",marginTop:20,fontSize:20,borderBottomWidth:1}
})