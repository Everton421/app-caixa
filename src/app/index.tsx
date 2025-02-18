import { StyleSheet , View , Text, StatusBar, TouchableOpacity, FlatList, TextInput } from "react-native"
import { Link, router } from "expo-router"
import { useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RenderItemConta } from "./components/itemConta";

export default function Home(){

    const [data , setData] = useState( [
        {
            conta:'itau',
            saldo:140,
            movimentos:
            [
                { 
                    tipo: 'e',
                    valor: 120
                },
                { 
                    tipo: 'e',
                    valor: 120
                },
                { 
                    tipo: 's',
                    valor: 100
                }     
            ]
        },
        {
            conta:'caixa',
            saldo:240,
            movimentos:
            [
                { 
                    tipo: 'e',
                    valor: 120
                },
                { 
                    tipo: 'e',
                    valor: 120
                }    
            ]
        },
        
    ]);
    
    type movimentos={
        tipo:string,
        valor:number
    }
    type conta={
        nome: string
    }
     const [ movFict, setMovFict] = useState<movimentos[]>([
            { 
                tipo: 'e',
                valor: 120
            },
            { 
                tipo: 'e',
                valor: 120
            },
            { 
                tipo: 's',
                valor: 120
            },
            { 
                tipo: 's',
                valor: 120
            },
               
        ]);
        const [ contaB, setContaB] = useState<conta>({ nome:'santander'})
            
    
       

        return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFF" barStyle={"dark-content"} />

               <View style={{ backgroundColor: '#3A7DFF', width:'100%', height:'30%', borderBottomLeftRadius:35, borderBottomRightRadius:35, elevation:5 }}>
                    <View style={{ alignItems:"center", margin:10, justifyContent:"space-between", flexDirection:"row"}} >
                        <Text style={{ color:'#FFF', fontSize:20, fontWeight:'bold'}}>
                            Login
                        </Text>
                       <Ionicons name="notifications" size={30} color="#FFF" />
                    </View>

                    <View style={{ alignItems:"center", justifyContent:"center" , height:'100%'}}>
                     <TouchableOpacity style={{ backgroundColor:'#FFF', width:'80%', borderRadius:10, padding:5, alignItems:"center", elevation:3, }}  >
                       <Text style={{ color:'#7F8082', fontSize:20, fontWeight:'bold'}}>
                            Cadastrar Conta
                        </Text>
                      </TouchableOpacity>
                     </View>
               
               </View>

                  <TextInput
                     style={{ backgroundColor:'#EDEEF2', width:'80%', borderRadius:10 , marginTop:20, alignSelf:"center", elevation:5}}
                     placeholder="pesquisar"
                     placeholderTextColor='#7F8082'
                  />

            <View style={{ width:'90%',  alignSelf:"center"}}>
                <FlatList
                data={data}
                        renderItem={({item})=>  RenderItemConta(item)}
                />
            </View>
           
            
        </View>
    )
}


const styles = StyleSheet.create({
    container:{width:'100%', flex:1, backgroundColor:'#FFF'}
    ,title:{fontWeight:'bold' , color:'#FFF'},
        button:{ backgroundColor:'#000', padding:5}
})