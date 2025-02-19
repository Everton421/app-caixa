import FontAwesome from "@expo/vector-icons/FontAwesome"
import { router } from "expo-router"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

type conta={
    conta:string,
    saldo:number,
    id:string
}

export const RenderItemConta = (item:conta)=>{

 function navegar(  saldo:number,  conta:string, id:string ){
        router.push({pathname:'/conta', params:{ saldo, conta, id}})
    }

    return(
        <TouchableOpacity 
        style={{   justifyContent:"space-between", padding:10,  flexDirection:"row",   margin:7, backgroundColor:'#3A7DFF',  borderRadius:10, elevation:3}}
        onPress={ ()=>navegar(   item.saldo ,JSON.stringify(item.conta), item.id  ) }
        >   

            <FontAwesome name="bank" size={24} color="#FFF" />
            
            <Text style={styles.title}>
                {item.conta}
            </Text>
            <Text style={styles.title}>
                 {Number( item.saldo ).toFixed(2)}
            </Text>
        
        </TouchableOpacity>
        )

    }

    const styles = StyleSheet.create({
       title:{fontWeight:'bold' , color:'#FFF'},
            button:{ backgroundColor:'#000', padding:5}
    })