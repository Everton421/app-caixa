import { FlatList, StyleSheet, Text, View } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default   function entradas   (){ 

    const [ configListItems ] = useState(
        [
            { 
                sequencia:1,
                title:'entradas',
                icon:  <AntDesign name="arrowdown" size={24} color="black" />
            },
            { 
                sequencia:1,
                title:'saidas',
                icon:  <AntDesign name="arrowup" size={24} color="black" /> 
            },
            { 
                sequencia:1,
                title:'movimentações',
                icon: <MaterialCommunityIcons name="bank-transfer" size={30} color="black" />
            }
        ])

const renderItensConfiList = (item)=>{
     return(
        <View style={{  width:110, height:100, margin:2,   borderRadius:35 ,   alignItems:"center", justifyContent:"center" }}>

        <View style={{  width:70, height:70,    borderRadius:35 , backgroundColor:'red', alignItems:"center", justifyContent:"center" }}>
              { item.icon }  

        </View>
        <Text style={{ fontWeight:'bold', color:'#FFF'}}> { item.title }  </Text>

        </View>

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
             
             <View style={ styles.headerBank }>
                <View>
                    <FontAwesome name="bank" size={24} color="black" />
                    <Text>
                        conta bancaria
                    </Text>
                 </View>   
            </View>

            <View style={{ alignItems:"center" ,justifyContent:"center"}} >
                <Text style={{ fontWeight:"bold", color:'#FFF', fontSize: 25}}> R$15,650.00   </Text>
            </View>
        
        <View style={{width:'100%', alignItems:"center", marginTop:15 }}>     
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
        backgroundColor:'red'
    }
})