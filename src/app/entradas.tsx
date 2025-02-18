import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Header } from "./components/header";
import { useLocalSearchParams } from "expo-router";

 
 
export default   function entradas   (){ 

    const data = useLocalSearchParams()

    const [ configListItems ] = useState(
        [
            { 
                sequencia:1,
                title:'entradas',
                icon: <MaterialCommunityIcons name="arrow-down-thick" size={34} color="black" />
            },
            { 
                sequencia:1,
                title:'saidas',
                icon:    <MaterialCommunityIcons name="arrow-up-thick" size={34} color="black" />
            },
            { 
                sequencia:1,
                title:'movimentações',
                icon: <MaterialCommunityIcons name="bank-transfer" size={34} color="black" />
            },
            
        ])
type icon ={ icon:string, title:string }

const renderItensConfiList = (item:icon)=>{
     return(
        <TouchableOpacity
              style={{  width:130, height:130,   borderRadius:35 ,   alignItems:"center", justifyContent:"center" }}>

            <View style={{  width:70, height:70,    borderRadius:35 , backgroundColor:'#FFF', alignItems:"center", justifyContent:"center" }}>
                { item.icon }  

            </View>
            <Text style={{ fontWeight:'bold', color:'#FFF'}}> { item.title }  </Text>

        </TouchableOpacity>

     )
}

const renderItensTransactions = (item)=>{
    return(
        <View style={{  margin:4, backgroundColor:'#3A7DFF', alignItems:"center",   borderRadius:10}}>   
            <View style={{ justifyContent:"space-between" ,flexDirection:"row", alignItems:"center" }}>
              <View>
              <Text>tipo: </Text>
              </View>
            
            
              <View>
               <Text>item</Text>
              </View>
            
            </View>

        </View>
    )
}
    return(
      <View style={ styles.container}>

           <Header arrowColor="#000" background="#FFF"  /> 

<Button
title="press"
onPress={()=>{ console.log(data) }}
/>
             <View style={ styles.headerBank }>
                <View>
                    <FontAwesome name="bank" size={24} color="#FFF" />
                    <Text style={{ fontWeight:'bold', color:'#FFF'}}>
                        conta bancaria
                    </Text>
                 </View>   
            </View>

            <View style={{ alignItems:"center" ,justifyContent:"center", marginTop:10, flexDirection:"row"}} >
                <Text style={{ fontWeight:"bold", color:'#FFF', fontSize: 25}}> R$15,650.00   </Text>
                <Entypo name="eye-with-line" size={30} color="white" />
                <Entypo name="eye" size={30} color="white" />

            </View>
        
        <View style={{  alignItems:'center', justifyContent:"center",  marginTop:15  }}>     
                <FlatList
                    horizontal={true}
                data={configListItems}        
                renderItem={({item})=>  renderItensConfiList(item)    }
                />
            </View>
        
        <View style={{ width:'100%',height:'100%' ,alignItems:"center", backgroundColor:'#FFF', borderTopLeftRadius:45, borderTopRightRadius:45, marginTop:20}}>
          
            <View style={{ marginTop:25, width:'95%'  }}>
                <Text style={{ fontWeight:"bold", marginLeft:10}}>
                    movimentações
                </Text>
                <FlatList
                        data={configListItems}        
                        renderItem={({item})=>  renderItensTransactions(item)    }
                        />
            </View>
        </View>

      </View>
    )
}

export const styles = StyleSheet.create({
    container:{ 
        flex:1,
        backgroundColor:'#3A7DFF'
    },
    headerBank:{
        flexDirection:'row',
        justifyContent:"space-between",
        margin:15,
        padding:3,
    }
})