import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { images } from '../constants' 

const WelcomeCard = ({title,content,image}) => {
  return (
    <View style={styles.container}> 

    <Image style={styles.img} source={images[image]} resizeMode="cover"/>
      <Text style={styles.t1}>{title}</Text>
      <Text style={styles.t2}>{content}</Text>
    </View>
  )
}

export default WelcomeCard

const styles = StyleSheet.create({
    container:{flex:1,
    justifyContent:"center",alignItems:"center",width:405 },
    t1:{
        fontSize:20,fontWeight:"bold"
    },
    t2:{
        width:"100%",justifyContent:"center",textAlign:"center",fontSize:15
    },
    img:{
        height:150,width:150
    }

})