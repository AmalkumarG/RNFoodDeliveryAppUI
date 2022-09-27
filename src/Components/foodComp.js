import { StyleSheet, Text, View ,TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { images } from '../constants'
const FoodComp = ({name,logo,activityCategory,setactivityCategory}) => {
  return (
   
    <TouchableOpacity key={name} onPress={()=>setactivityCategory(name)} style={styles.category()}>
        <Image source={images[logo]} style={styles.categoryIcon(activityCategory===name)} />
        <Text style={styles.categoryText(activityCategory===name)}>{name}</Text>
    </TouchableOpacity>
  )
}

export default FoodComp

const styles = StyleSheet.create({
    category:(marginTop=0)=>({
        alignItems:"center",
        marginTop,
        
       
        
    }),
    categoryIcon:isActive=>({
      height:30,width:30,
      opacity:isActive?1:.5,
      
    }),
    categoryText:isActive=>({
      opacity:isActive?1:.5,
      color:"white"
    })
})