import { StyleSheet, Text, View ,StatusBar,FlatList, TouchableHighlight} from 'react-native'
import React ,{useState,useRef}from 'react'
import {General} from '../constants'

import { WelcomeCard } from '../Components'
const pagestyle = isActive =>
isActive
? styles.page:
{... styles.page, backgroundColor: "gray"}

const Pagination = ({index})=> {
return (
<View style={styles.pagecontainer}>
{[... Array(General.WelcomeList.length).keys()].map((_, i) =>
i === index ?(
<View style={pagestyle(true)} key={i} />
) :(
<View style={pagestyle(false)} key={i} />
),
)}
</View>
); I
};

const Welcome = ({navigation}) => {
  const [welcomeListindex,setwelcomeListindex]=useState(0)
  const welcomeList=useRef()   
  const onViewRef=useRef(({changed})=>setwelcomeListindex(changed[0].index))
  const viewconfigRef=useRef({viewAreaCoveragePercentThreshold:50})
  const pageScroll=()=>{
    welcomeList.current.scrollToIndex({
      index:welcomeListindex<2?welcomeListindex+1: welcomeListindex
    })
  }
  return (
    <View style={styles.container}>
    <StatusBar barStyle={"dark-content"} backgroundColor="White" translucent/>

      <FlatList data={General.WelcomeList}
      ref={welcomeList}
      
        keyExtractor={item=> item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        overScrollMode={"never"}
        viewabilityConfig={viewconfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        renderItem={({item})=><WelcomeCard {...item}/>}
      />
      <Pagination index={welcomeListindex} />
      {welcomeListindex===2?(
        <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
        <TouchableHighlight style={styles.getButton} onPress={()=>navigation.navigate("Login")}>
          <Text style={{color:"white"}}>Get Started</Text>
        </TouchableHighlight>
        <View style={{height:100,}}></View>
          
        </View>
        
      ):(
        <View style={styles.buttonSN}>
        <TouchableHighlight onPress={()=>welcomeList.current.scrollToEnd( )}>
          <Text style={styles.text}>Skip</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>pageScroll()} style={styles.button}>
          <Text style={styles.text}>Next</Text>
        </TouchableHighlight>
      </View>
      )}
    
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
container:{
    flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"
},
pagecontainer:{flexDirection:"row"},
page:{height:15,width:40,borderRadius:10,backgroundColor:"#207865",marginTop:-150,marginLeft:10},
buttonSN:{
  height:70,width:"100%",padding:10,
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center"
},
text:{
  fontWeight:"bold",fontSize:18,color:"gray"
},
button:{backgroundColor:"#d5e8e0",
height:50,width:50,alignItems:"center",justifyContent:"center",borderRadius:32,padding:4},
getButton:{
  backgroundColor:"#207865",height:50,width:"50%",borderRadius:20,justifyContent:"center",alignItems:"center",marginTop:-80
}

})