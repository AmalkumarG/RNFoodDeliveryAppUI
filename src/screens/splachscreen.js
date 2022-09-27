import React,{useEffect} from 'react'
import { View, Text ,StatusBar,Image,ImageBackground} from 'react-native'
import { StyleSheet } from 'react-native'
import images from "../constants/images"



export default function splashsreen({navigation}) {
  useEffect(()=>{
    setTimeout(()=>{navigation.navigate("Welcome")},3000) 
  },[])
  return (
    <View style={styles.container}>
    <StatusBar barStyle={"light-content"} backgroundColor="#207865"/>
    <View style={styles.imglogosps}>
    <Image style={styles.img} source={images.PLATE} resizeMode="center"/>
    
    

    </View>
      
    </View>
  )
}



const styles=StyleSheet.create(
  {
    container:{flex:1,
      backgroundColor:"#207865"
    },
    imglogosps:{justifyContent:"center",alignItems:"center",
      height:"100%",width:"100%"
    },
    img:{height:"30%",width:"60%"}
  }
)