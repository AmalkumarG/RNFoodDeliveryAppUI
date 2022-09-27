import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CountryCode from '../constants/CountryCode'
import staticImageService from '../Services/staticImageService'

const FlagDropdown = ({code,dial_code,name,onpress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>onpress({code,dial_code,name})}>
    <Image source={{uri:staticImageService.getFlag(code)}} style={styles.img}/>
    <Text style={styles.txt}>{dial_code}</Text>
    <Text style={styles.txt}>{name}</Text>
    </TouchableOpacity>
    
  )
}

export default FlagDropdown

const styles = StyleSheet.create({
    container:{flexDirection:"row"},
    img:{
        height:20,width:20,margin:5
    },
    txt:{margin:5}
    
})