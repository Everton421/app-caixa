import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, router } from "expo-router";
import { navigate } from "expo-router/build/global-state/routing";
type props =  {
    background:string,
    arrowColor:string
}

export const Header  = ( {background , arrowColor }:props )=>{ 
 return (
    <View style={{   backgroundColor: background, alignSelf:'flex-start', width:'100%'}}>
       <View style={{ marginLeft:3, flexDirection:"row", alignItems:"center", padding:10}}>   
         
 <TouchableOpacity onPress={()=>{ router.back()  }}>
 <AntDesign name="arrowleft" size={34} color={arrowColor}  />

 </TouchableOpacity>
           
        
         <Text style={{ color:arrowColor, margin:5, fontSize:20}} > voltar </Text>

       </View>
    </View>
 )
}